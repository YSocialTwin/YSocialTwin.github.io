# Carousel Fix Summary

## Problem
The carousels in the website (particularly `/key_features` page) were not working properly due to:
1. CSS selectors being too broad and affecting all buttons on the page
2. JavaScript selectors being global and causing conflicts between multiple carousels

## Root Cause Analysis

### Issue 1: CSS Selector Specificity
In `assets/css/custom.scss`, the button styles were applied using the generic `button` selector:
```css
button {
  position: absolute;
  top: 50%;
  ...
}
```
This caused ALL buttons on the page to have absolute positioning, breaking the layout of other UI elements.

### Issue 2: JavaScript Scope
In `_pages/index.markdown`, the carousel JavaScript used global selectors:
```javascript
const items = document.querySelectorAll('.carousel-item');
document.querySelector('.next').addEventListener('click', ...)
```
When multiple carousels exist on a page, this would select items from ALL carousels, causing them to interfere with each other.

## Solution

### CSS Fix
Changed all button-related selectors to be specific to carousel buttons:
```css
.custom-carousel button { ... }
.custom-carousel button.prev { ... }
.custom-carousel button.next { ... }
.custom-carousel button:hover { ... }
```

### JavaScript Fix
Wrapped the carousel code in an IIFE (Immediately Invoked Function Expression) and scoped all selectors to the specific carousel container:
```javascript
(function() {
  const carousel = document.querySelector('.custom-carousel');
  if (!carousel) return;
  
  const items = carousel.querySelectorAll('.carousel-item');
  const nextBtn = carousel.querySelector('.next');
  const prevBtn = carousel.querySelector('.prev');
  // ... rest of the code
})();
```

## Files Modified
- `assets/css/custom.scss` - Fixed CSS selector specificity
- `_pages/index.markdown` - Fixed JavaScript scoping for homepage carousel
- `.gitignore` - Added backup file patterns
- `test_carousel.html` - Created test page to verify fix

## Testing
Created `test_carousel.html` with two independent carousels to verify:
- ✅ Each carousel navigates independently
- ✅ Navigation buttons work correctly for each carousel
- ✅ CSS styles only affect carousel buttons
- ✅ No interference between multiple carousels

## Build Instructions
To see the fixes in action on the actual website:

1. Install dependencies (if not already done):
   ```bash
   bundle install
   ```

2. Build and serve the Jekyll site:
   ```bash
   bundle exec jekyll serve
   ```

3. Navigate to:
   - Homepage: http://localhost:4000/ (single carousel)
   - Key Features: http://localhost:4000/key_features (two carousels)

## Notes
- The `key_features.markdown` file already had correct carousel implementation with proper scoping
- The fix ensures consistency across all pages with carousels
- No security vulnerabilities were introduced (verified with CodeQL)
