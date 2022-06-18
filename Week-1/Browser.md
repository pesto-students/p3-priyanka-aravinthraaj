# Week 1 
### Exercise 1.1 (Working of Browser)

*I am ensuring that this project was done by me and not copied from anywhere.*

### *What is browser?*
A browser is a software where user can surf through internet and get the desired results. Browser is responsible for fetching the desired data and present it elegantly to the end user.
### *When an user enters an URL in the browser!*
- An URL is typed in a browser and called
- Browser search an Ip address for the domain
- Connection with the server is initiated
- Http request is sent to the server
- The request is processed by the server and sends the response
- Browser renders and display the content to the user 

### *Main functionality of the browser*
The main functionality of browser is, where user can search and surf. The browser displays the content elegantly and user can able to bookmark, manage the history etc.
### *High Level Components of a browser*
```mermaid
  flowchart TD;
      subgraph box [Browser]
      id1([User Interface]);
      id2([Browser Engine]);
      id3([Render Engine]);
      id4([Js Interpreter])
      id5[(Storage)];
      id1 --> id2 --> id3 --> id4;
      id2 -->id5
      end
      style id1 fill:#FFA07A,color:#000
      style id2 fill:#D462FF,color:#000
      style id3 fill:#52D017,color:#000
      style id4 fill:#FFFF33,color:#000
      style id5 fill:#E30B5D,color:#000
      style box fill:#5DADE2,color:#000
```
- #### User Interface
  - **Address bar**
    > Where user can enter the URL and direct search (Mordern browsers) 
  - **Back and Forward button**
    > Browser keeps track of the sites user visited, user can go back and forth using these options 
  - **Home button**
    > Its the main page of the browser where user can keep all sort of important things. It can be list of shortcuts for the favorite websites of user or a search engine page like Google, Duckduckgo etc. 
  - **Browser Window**
    > This is where the browser renders the web content to the users it can be HTML, PDF, Audio, Video or any type of content.
  - **Settings** 
    > This is where the user keps thier personal preferences like browser theme, wether to save history or not, accounts and password etc.
- ####  Browser Engine
  > Browser engine is responsible for the interaction between User interface and Render engine
- #### Render Engine
  > Render engine is responsible for parsing the HTML and CSS files and displaying the webpage
- #### JS Interpreter
  > Render and parse the JS files for the websites
- #### Storage
  > Where keeps the data like Cookies, User accounts, Bookmarks, Files and other storage elements. 

#### *Rendering engine and its uses*
Render Engine is responsible for parsing the HTML and CSS file received from the server. The engine draws the structure and apply the design to it from the accquired file. There are number of engines currently used eg: Gecko, Blink
##### Flow of the Render tree
```mermaid
  flowchart LR;
      1[Parsing HTML \n to DOM Tree];
      2[Render tree \n construction];
      3[Layout of \n render tree];
      4[Painting \n render tree];
      1-->2-->3-->4;
      classDef customStyle fill:#fff,color:#000;
      class 1,2,3,4,5,6 customStyle;

```
### *Parsers*
Parsing is one of the process in rendering engine. On parsing the document (HTML or CSS) translating the code and parse tree is generated. 

```mermaid
  flowchart TB;
      1[[Source code]];
      2{Parsing};
      3[Parse tree];
      4([Translation]);
      5[Machine Code]
      1-->2-->3-->4-->5;
      classDef customStyle fill:#fff,color:#000;
      class 1,2,3,4,5,6 customStyle;

```
#### Types of parsers
##### HTML Parser
 HTML Parser is responsible for parsing the HTML Document to parse tree

 The Dom tree is created using HTML Document as below

```html
<html>
<body>
  <p>
    Hello World
  </p>
  <div> <img src="example.png"/></div>
</body>
</html>
```

```mermaid
  flowchart TB;
      1(HTMLHtmlElement);
      2(HTMLBodyElement);
      3(HTMLParagraphElement);
      4(HTMLDivElement);
      5(Text);
      6(HTMLImageElement);

      1-->2-->3;
      2-->4-->6;
      3-->5;

      classDef customStyle fill:#B3FFAA,color:#000;
      class 1,2,3,4,5,6 customStyle;
```

##### CSS Parser

```css
p,div{
  margin-top:3px;
}
.error {
  color:red;
}
```

```mermaid
  flowchart TB;
      1(CSSStyleSheet);
      2(CSSRule);
      3(Selectors);
      4(Declaration);
      5(CSSRule);
      6(Selectors);
      7(Declaration);
      8[/p/]
      9[/div/]
      10[/Margin-top/]
      11[/3px/]
      12[/.error/]
      13[/color/]
      14[/red/]

      1-->2-->3;
      2-->4;
      1-->5-->6;
      5-->7;
      3-->8
      3-->9
      4-->10
      4-->11
      6-->12
      7-->13
      7-->14
      classDef customStyle fill:#ECAAFF,color:#000 ;
      class 1,2,3,4,5,6,7,8,9,10,11,12,13,14 customStyle;
```
### *Script Processors*
Script processor is responsible for processing js file and translating ion to machine code
### *Order of script processing*
```mermaid
  flowchart TB;
      1[Script];
      2[Speculating Parsing];
      3[Style sheets];

      1-->2-->3;
      classDef customStyle fill:#FF9A07,color:#000;
      class 1,2,3 customStyle;
```

### *Layout and Painting*
After the render tree is created the position and sizes are calculated for the nodes. The process of calculating the position and size is called layout

Painting is the final process once the calculations are done document is rendered using paint function and display content on the browser window.
