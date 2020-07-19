# startpage
Start page used for my self hosted applications

### Required Files (you provide this!)
 
- Background Images: *Backgrounds on the page are loaded from the backgrounds folder randomly, the images must be numbered from 1 through 24, with a .jpg extension. Place them in the "backgrounds" folder.*

## Customization (General Information)

- Most of the site options are set within the pageData.js file
- A clean "pageData  - TEMPLATE.js" file has been provided to allow you to quickly replace the links. Simple edit this, and rename it to pageData.js, replacing the existing file.

### Customizing the Background Image
- To control the background settings, refer to the section "background" inside the "pageOptions" variable.
- If "randomize" is set to false, then only the value in "staticBackground" will be used
- When "randomize" is set to true, then it will assume the image names are all numerical values, in the "backgrounds" folder

### Customizing the Site Links / Column Data
- To control the data in the generated columns, refer to the "columnData" variable in pageData.js. There is no limit on how many columns you can have, or how many links you can have per column.
- **Note:** If the DisplayName is empty / whitespace only, then that record will be skipped

### Additional resources

- [Font Awesome](https://fontawesome.com "Font Awesome")
- [Unsplash](https://www.unsplash.com "Unsplash")
- [Google Fonts](https://fonts.google.com/ "Google Fonts")

