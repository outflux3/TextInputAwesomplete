# Text Input Awesomplete

Key Points:

Uses Awesomplete JS library for instantiating autocomplete suggestions on text input fields in Processwire CMS.

Supports any text field, including Page Title (FieldtypePageTitle). 

Allows admins to configure a list of suggestions (textarea input), or pull suggestions from Processwire pages, by configuring which pages to pull from and which field's value to use.

## Table of Contents

- [About Awesomplete](#about-awesomplete)
- [Benefits](#benefits--uses)
- [Installation](#installation)
- [Usage](#usage--configuration)
- [Support](#support)
- [Contributing](#contributing)

## About Awesomplete

https://leaverou.github.io/awesomplete/

https://github.com/LeaVerou/awesomplete

## Benefits & Uses

Can be helpful for fields where users may need to enter the same text in the same field on multiple pages, and you can't or don't want to use a Page Reference field.
One example could be a site where you send emails using various boilerplate subjects; Another place to use this would be if you had an existing site with a text field that has some inconsistency when same values are added. The autocomplete would help editors to always use the same format as the other pages with the same value.

## Installation

Upload or install from Modules directory.  

## Usage & Configuration

Once installed, on any text input field (including Page Title), you will see an option to enable autocomplete. 

Once enabled you will have the option to type a list of items for autocomplete suggestions, or enable the module to search pages for suggestions.

**Note that if you enter any items in the Items List field, those will always be part of the autocomplete suggestions, in addition to pages if configured.**

If you elect to use pages for the suggestions, you have these options:

- Choose a template to limit by *(adds a template=sometemplate to the pages find selector)*. 
- Override which field to pull suggestions from (by default it will use the field you are configuring). *Sets the $field!= in the selector*.
- Setup a **Selector** for finding the pages for the autocomplete suggestions. 

	– This overrides the template selected. 
	– Note that the selector needs to return pages that use the field being configured, or the field selected for override.

## Support

ProcessWire Support Thread

[https://processwire.com/talk/topic/21697-textinputawesomplete/](https://processwire.com/talk/topic/21697-textinputawesomplete/)

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/outflux3/TextInputAwesomplete/compare/).
