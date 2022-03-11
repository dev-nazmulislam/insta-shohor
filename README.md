# Insta-Sohor

## Hello, I am Md Nazmul Islam 😊

## This is a Fully Responsive "Insta-Sohor" Website Made by programming hero But i fixed there some bug(problems):

## Web Development Interview Questions you have must know

### Question-01: How does javaScript work?

> JavaScript is a client side scripting language. It means JavaScript runs at the client-side, inside the web-browsers. help of javaScript Engine. So most important thing to remember is that client's web-browser also needs to support the JavaScript. Nowadays, most of the modern web browsers support JavaScript and have their JavaScript engines.

> Example:

1.  Google Chrome has its own JavaScript engine called V8.
2.  Firefox Spidermonkey.
3.  Safari JavaScript Core

> Also JavaScript is single-threaded language it means JavaScript run only one operation at a time. But there has event loop which maintain long task.

> `Conclusion`: JavaScript work help of javaScript Engine (V8, Spidermonkey) Line by line synchronously.

### Question-02: what is javaScript event loop?

> Javascript is single-threaded, it executes only one operation at a time. This process of executing we say javascript is synchronous and run only one operation at a time. But what happens when run long task to complete? This situation JavaScript complete long task help of event loop. behind the seans which mechanisms complete there long task called event loop. Now we discous this mechanisms (event loop).

#### JavaScript Engine

> Each browser has a Javascript runtime environment. the javascript runtime consists of Javascript Engine. this engine have a memory heap and a call stack.

#### Heap

> Memory heap is allocated every objects, functions or variables and stored in the heap.(means top).

#### Call stack

> The call stack read your javascript code and executed line by line.The call stack follows the First In Last principle, the function that is first added is executed last.

### Question-03: What is Difference between local storage & session storage?

> SessionStorage and LocalStorage used for storing the data on the client side. But there have some differences between local storage and session storage are given bellow:

<table class="table table-striped">
        <thead>
        <tr class="text-center">
            <th>#</th>
            <th>Local storage</th>
            <th>Session storage</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>01</td>
            <td>
            The local Storage stores data parmanently, it has no
            expiry date.
            </td>
            <td>
            The session storage Stores data only for the duration of
            the session, when the user closes their browser the data
            is lost.
            </td>
        </tr>
        <tr>
            <td>02</td>
            <td>
            The local storage data Cleared only via JavaScript code
            or clearing browser cache.
            </td>
            <td>
            The session storage data Cleared when browser closed.and
            there data uniq each browser tab.
            </td>
        </tr>
        <tr>
            <td>03</td>
            <td>
            The local storage data limit 5MB per app per browser.
            According to the HTML5 spec, this limit can be increased
            by the user when needed.
            </td>
            <td>
            The session storage data Limit 5MB, Limited only by
            system memory.
            </td>
        </tr>
        </tbody>
</table>
