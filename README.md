# TASK MASTER

## Description

Task Master is a `task manager` application designed to help users manage their tasks and projects effectively. 
It allows users to create, organize, prioritize and track tasks in a central place.


# Author

- [Mercy Saina](https://github.com/sainamercy)

# Built with
- [React](https://reactjs.org/)
- [Tailwind css](https://tailwindcss.com/)
- [Own API](https://github.com/sainamercy/task-manager-backend-sinatra)

# Live link

- [Click to open application](https://task-manager-app-hazel.vercel.app/)

## Features

### Aunthentication 

#### Sign-up
- Click on `get started` to display the sign up form.
- Fill in the provided fields.
- Click `sign-up button` to complete sign-up`.
- You will be redirected to the task list page.

#### Log-in
- Use data from sign-up to `log-in`.
- Click `log-in button` to complete log-in.
- This will also redirect you to the task list page.

#### Log-out
- Click `log-out` option on the navigation bar to get logged out.

### Create a new task
- After logging in `create new task` option will appear on the navigation bar.
- Click on `create new task` option to display the form for creating a new task.
- Fill all fields with necessary information.
- Click on `submit` button.
- Your new task will appear on the task list.

### Task List
- By default the task list is filtered by status (to-do, in progress and completed tasks).
- The `filter by date` feature: select the date the click on `Filter by Date` button or `enter key` to display results. To rest to original list, click on `reset` button.
- The `search` feature: enter key word or specific task title in the input field provided, then Click on `search icon` or `enter key` to display results.
- To view a task description, click on the down arrow icon.
- To hide a task description, click on the up arrow icon.
- To update the status of a task, select the avaible option on the task, the click `enter key`. This will move the task to the respective category.
- To delete a task, click on the down arrow icon which will display the `delete` button. Click the button to delete the task.

# Development installation

## Requirements

In order for you to use the content on this repo ensure you have the following:

- A computer that runs on either of the following; (Windows 7+, Linux, Mac OS).
-  nodejs 9.0+
- Visual Studio Code.

### Alternative One

- Open a terminal / command line interface on your computer.
- Clone the repo by using the following to create a copy on your local machine:

        git clone https://github.com/sainamercy/task-manager-app
       
- Change directory to the repo folder:

        cd task-manager-app

- Open it in ``Visual Studio Code``

        code .

### Alternative Two

- On the top right corner of this page there is a button labelled ``Fork``.
- Click on that button to fork the repo to your own account.
- Take on the process in ``Alternative One`` above.
- Remember to replace your username when cloning.

        git clone https://github.com/your-username-here/task-manager-app

## Running the application

To run the application, you can use the following steps to run the app.

- Install required dependencies from npm

      npm install

- Run the application

      npm run dev
  
- Click on the link provided, to open the application on your browser.
- Repeat the steps on the `Features` section above.

# License

- The project is licensed by `MIT`.


