# Jekyll Markdown JavaScript Processing Fix

## Issue

The JavaScript carousel code was not executing when the page loaded, even though the same code worked perfectly when run from the browser console. This indicated a **Jekyll/Kramdown markdown processing issue**.

## Root Cause

Jekyll's markdown processor (Kramdown) and Liquid template engine can interfere with inline `<script>` tags in markdown files. The JavaScript code was being processed/modified by Jekyll before reaching the browser, causing it to fail to execute.

## Solution

Wrapped all `<script>` blocks in Liquid's `{% raw %}` and `{% endraw %}` tags:

```liquid
{% raw %}
<script>
// Initialize all carousels on the page
document.querySelectorAll('.custom-carousel').forEach((carousel) => {
  // ... carousel code
});
</script>
{% endraw %}
```

## How It Works

- `{% raw %}` tells Jekyll's Liquid template engine to **stop processing** everything that follows
- `{% endraw %}` tells Jekyll to **resume processing**
- Everything between these tags is passed through to the output **unchanged**
- This ensures the JavaScript code reaches the browser exactly as written

## Files Modified

1. `_pages/index.markdown` - Wrapped carousel script in raw tags
2. `_pages/key_features.markdown` - Wrapped carousel script in raw tags

## Why This Fix Works

When Jekyll processes markdown files:
1. **Without `{% raw %}`**: Liquid processes the content, potentially mangling JavaScript syntax (e.g., curly braces, template literals, etc.)
2. **With `{% raw %}`**: Liquid skips processing, JavaScript arrives intact at the browser
3. Browser executes the JavaScript normally

## Alternative Solutions (Not Used)

1. **External JavaScript file**: Move script to `assets/js/carousel.js` and include it
   - More complex, requires separate file management
   
2. **`markdown="0"` attribute**: Wrap in `<div markdown="0">...</div>`
   - Less clean, mixes HTML attributes with Liquid tags

3. **HTML file instead of markdown**: Use `.html` instead of `.markdown`
   - Loses markdown benefits for rest of content

## Verification

After Jekyll rebuilds the site:
- Index page carousel should work immediately on page load
- Key features page both carousels should work immediately on page load
- No console errors
- JavaScript visible in browser DevTools matches source code exactly

## Reference

- [Jekyll Liquid Documentation](https://jekyllrb.com/docs/liquid/)
- [Liquid raw tag documentation](https://shopify.github.io/liquid/tags/raw/)
