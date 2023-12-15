practiced using version control on 9/15

created a domain name "braceletclub.click" on 9/22

created a codepen for a test html file on 9/28


midterm notes:
1. link:
The <link> tag defines the relationship between the current document and an external resource.
The <link> tag is most often used to link to external style sheets or to add a favicon to your website.
The <link> element is an empty element, it contains attributes only.

2. The <div> tag defines a division or a section in an HTML document.

3. The # symbol is used to select elements by their "id" attribute. The . symbol is used to select elements by their "class" attribute.

4. Padding is the space between the content of an element and its inner border. Margin is the space outside an element, between the element's border and any neighboring elements.

5. CHANGING BACKGOURND COLOR: background-color is a CSS property that sets the background color of the selected elements.

6. Display image with hyperlink: <a href="https://www.example.com">
                                    <img src="image.jpg" alt="Description of the Image">
                                 </a>

7. CSS box, inside working out: Content, Padding, Border, Margin

8. Declare doctype to be HTML: <!DOCTYPE html>

9.JS examples: 
  if: 
    if (condition) {
  // Code to execute when the condition is true
} else {
  // Code to execute when the condition is false
}

  for: 
    for (initialization; condition; increment/decrement) {
  // Code to execute in each iteration
}

  while: 
    while (condition) {
  // Code to execute as long as the condition is true
}

  switch:
    switch (expression) {
  case value1:
    // Code to execute when expression matches value1
    break;
  case value2:
    // Code to execute when expression matches value2
    break;
  // Additional cases
  default:
    // Code to execute when no case matches
}

10. Correct syntax for creating a JS object example:
    var person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john@example.com"
};

11. It is possible to add new properties to JS objects? Yes:
    var person = {
  firstName: "John",
  lastName: "Doe"
};

person.age = 30; // Adding a new 'age' property to the 'person' object


12. Include JS on a HTML page:
    inline JavaScript: You can include JavaScript code directly within the HTML document using the <script> tag in the <head> or <body> section.

13. JSON: text based. human readable. supports lots of datatypes. used with APIs. does NOT have executable code.

14. COMMANDS:
    chmod: Changes the permissions of files and directories, allowing you to specify who can read, write, and execute them.
    pwd: Prints the current working directory, showing you the full path to your current location in the file system.
    cd: Changes the current directory. You can use cd followed by a directory path to navigate to that directory.
    ls: Lists the files and directories in the current directory. You can use various options with ls to control the output format and sorting.
    vim: Opens the Vim text editor, a powerful and highly configurable text editor used for editing files in the command line.
    nano: Opens the Nano text editor, a simpler and more user-friendly command-line text editor for editing files.
    mkdir: Creates a new directory with the specified name.
    mv: Moves or renames files and directories. You can use it to move a file from one location to another or change its name.
    rm: Removes files and directories. Be cautious when using this command, as it can permanently delete files.
    man: Opens the manual pages for commands, displaying detailed information and documentation about how to use a particular command.
    ssh: Allows you to connect to remote servers securely using the Secure Shell protocol. You can log in to a remote server and execute commands on it.
    ps: Displays information about currently running processes on the system, such as their process ID (PID), status, and resource usage.
    wget: Downloads files from the internet. You provide the URL of the file you want to download as an argument.
    sudo: Allows users to run commands with superuser (administrative) privileges. It's often used to perform administrative tasks and system maintenance.

15. Remote shell session = ssh

16. Including -la to -ls commands: a long-format listing of all files and directories in the current directory, including hidden ones, with detailed information about each item.

17. banana.fruit.bozo.click: banana, fruit, bozo = subdomains. .click = TLD (top level domain)

18. Is a web certificate is necessary to use HTTPS? YES

19. Can a DNS A record can point to an IP address or another A record? = You cannot directly point an A record to another A record. A records are meant to map domain names to IP addresses, not to other domain names or DNS records.

20. Port 443, 80, 22 is reserved for which protocol?:
    Port 80: This port is reserved for the HTTP (Hypertext Transfer Protocol) protocol, which is the standard protocol for serving web pages and web content over the internet. HTTP uses this port to communicate.
    Port 443: This port is reserved for the HTTPS (Hypertext Transfer Protocol Secure) protocol. HTTPS is a secure version of HTTP that encrypts data transferred between a web server and a web client, ensuring data privacy and security. Secure websites use this port.
    Port 22: This port is reserved for the SSH (Secure Shell) protocol. SSH is used for secure remote administration of systems and secure file transfers. It provides encrypted communication between a client and a server.

21. 


