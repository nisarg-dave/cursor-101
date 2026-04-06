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
14. Project rules live in .cursor/rules as markdown files and are version-controlled. They are scoped using path patterns, invoked manually, or included based on relevance.
15. .cursor/rules/project.mdc — A Cursor rule with alwaysApply: true, so it is intended to be included in agent context for this workspace. It states stack, folder habits, styling/chart/accessibility notes, and a short quality bar.
16. AGENTS.md (repo root) — A project brief for agents: what the app is, npm commands, where files live, and light conventions. It doubles as onboarding text for humans.
17. Rules are built for injection and targeting (including “only when editing *.ts”). AGENTS.md is closer to a README for agents—broader and easier to read cover-to-cover.
    Do you need both?
    No. One well-maintained source can be enough.

    Rules only: Fine if you care most about consistent AI behavior and like the rule picker / alwaysApply / globs. They are designed to be more narrower.
    AGENTS.md only: Fine if you prefer a single doc and rely on @AGENTS.md or project search to pull it in. Designed to be more broader. 
    Both (what you have now): Useful when rules stay short and strict, and AGENTS.md holds the fuller map (commands, tree, workflow). That avoids stuffing everything into one giant rule file.
18. Cursor also loads skills from Claude and Codex directories: .claude/skills/, .codex/skills/, ~/.claude/skills/, and ~/.codex/skills/. Remember commands = user-triggered shortcuts; skills = reusable expertise the agent can attach when relevant. E.g., skill created and Cursor can match this skill when chat or tasks match that description. Can either @ or use / for this skill



#### Cursor 3
1. Cursor 3 has introduced a new agents window which allows you to manage many repos. It allows you to to build with agents across repos and environments, including local, cloud, remote SSH, and more. It also includes browser and terminal access and editing elements in the browser has changed to be more prompt based.
2. You can now review and commit changes and manage PRs all in this window
3. You can move an agent to cloud from local and vice versa
4. Can start a new chat with agent running on local device, cloud or worktree (useful for experimental edits away from main checkout). Commands such as /worktree and /best-of-n seem to only work in original chat window and not here