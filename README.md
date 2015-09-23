##avatarInitial.js

A lightweight jQuery plugin which generates text avatar (SVG based) images with background colors for profile use.

---

> <a href="http://johnjoshualipio.github.io/avatarInitial.js/">Demo Page</a> *note yet available


Usage
--

**Load**

>  &lt;script src=&quot;ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js &quot;&gt;&lt;/script&gt;<br>
>  &lt;script src=&quot;src/jquery.avatarInitial.js&quot;&gt;&lt;/script&gt;

**Markup**

>  &lt;img class=&quot;image&quot; data-name=&quot;John Joshua Lipio&quot;/&gt;<br>
>  &lt;img class=&quot;image&quot; data-name=&quot;Lipz&quot;/&gt;


**jQuery code**

 > $('.image').avatarInitial(); 

Options
--
**For complete details visit the <a href="http://lipzycho.github.io/avatarInitial.js/">demo page</a>.**

| Option      | data-attribute   | Description                                                    | Default    |
|-------------|------------------|----------------------------------------------------------------|-------|
| name        | data-name        | Name of the user which the avatar text will be based        | avatarInitial           |
| size        | data-size      | Height and Width of the picture                             | 100          |
| textColor   | data-text-color  | Text Color                                                  | #FFF       |
| override    | data-override  | If true, avatarInitial will generate avatar text and replace the image whether it fail to load or not| false       |
| alt         | data-alt  | If true, avatarInitial will generate avatar text and replace the image if it fails to load | true  |
| fontSize    | data-font-size   | Font size of the character(s)                                  | 60     |
| fontWeight  | data-font-weight | Font weight of the character(s)                                | 100  |
| radius      | data-radius      | Radius of the corner                                                | 0     |
| onlyOne     | data-only-one    | If true, avatarInitial will only display 1 initial                       | true    |

