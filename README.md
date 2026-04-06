### Cursor 101

1. Use plan mode when starting. Use command + . to switch between modes. This will create a plan markdown file and once you approve it you can press build. (try the gpt 5.x high for planning and sonnet for execution)
2. Create new branch -> create new branch and then use @symbol to find the branch and ask it to do something. E.g., before merging new feature into master, get it to review the changes and ask if there are any issues.
3. Custom commands -> create a commands folder inside the .cursor and then create a markdown file. And then in the chat window use the slash command to see it
4. Pass in images when needed to the chat.
5. Click on 3 dots at the bottom of the chat window to fork chat -> this will help keep context
6. Use /summarize to for it to summarise the chat. Also, look at how much context you have used in the circle at the bottom.
7. Keyboard shortcuts -> command  + i to open chat window and then command + / to change model
8. Start new conversations constantly -> to create new context windows -> command + n
9. When you ask it do something and don't like it there is an undo button to go back to previous checkpoint.
10. When you open your app in the cursor browser you can edit the css styles of elements
11. You can queue messages. So don't need to wait for one to complete before proceeding with the next. You can also reorder the queue.
12. The @ symbol can reference anything from foles, folders, specific functions in code and past chats
13. Use debug mode when resolving a bug and provide as much context as possible.


#### Cursor 3
1. Cursor 3 has introduced a new agents window which allows you to manage many repos. It allows you to to build with agents across repos and environments, including local, cloud, remote SSH, and more. It also includes browser and terminal access and editing elements in the browser has changed to be more prompt based.
2. You can now review and commit changes and manage PRs all in this window
3. You can move an agent to cloud from local and vice versa
4. Can start a new chat with agent running on local device, cloud or worktree (useful for experimental edits away from main checkout). Commands such as /worktree and /best-of-n seem to only work in original chat window and not here