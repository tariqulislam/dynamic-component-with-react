---

Step by Step Design Generate Dynamic Component- React JS
Dynamic form generation is important complex form design. In our web application, there are many complex field, Such as multiple address, multiple phone number, other multiple field has array of data, most of the developer try to send those data using array structure. React don't provide the feature to generate dynamic form . so developer has to to build hist own logic to develop the multiple form design during development. I also face the same problem when designing the multiple dynamic component with React JS . for that reason, I have writing this topics, which will be help the react developer to better understand, how to create the dynamic component at runime.
Today I have discuss about:
Create Application Structure for React JS
Dynamic Form Add Funtionality
Dynamic Component Data Handling
Dynamic Form Delete Functionality
Save Dynamic From Data and Show Into List

Create Application Structure for React JS
I am using create-react-app boiler plate to create example of dynamic from design, before development, we need to know about:
create-react-app structure
How to create function and event handler for react js

First we create the application with this command:
> create-react-app dynamic-component-with-react
After creating that app,  those folder and files are available at the project structure:
|-- dynamic-component-with-react
|---- public
|---- node_modules
|---- src
|---- package.json


---

Dynamic Form Add Funtionality
Remove extra code from render function at  App.js file and replace the code below:



Figure 1.1 Redesign the App.js fileAdd css or scss file named style.css or style.scss file which is contains all the design for application:



Figure: 1.2 css file for application at `src/style.css`In App.js file, I added the state for dynamic form which contains the array named dynamicFormSerial by this.state = { dynamicFormSerial: []}. That state is using for control the render of Dynamic Form.
Now we need to create file named DynamicComponent at src folder:



Figure: 1.3 add the dynamic form to project with textbox and buttonIn Figure1.2, Dynamic form component contains textbox and button of cancle function.
Our main purpose is to generate dynamic component to project. So we need to create actions handler for react component which will helps to generate component on runtime:



FIgure;: 1.3, add the dynamic component to applicationIn figure 1.3, App react component contains event handler named onAddFormButtonClick . where we will add new serial of the form by using dynamicFormSerial array state of the component. then add the iteration at render() function for rendering the dynamic component by using map function.
In onAddFormButtonClick function:
const { dynamicFormSerial } = this.state;`
Distruct the state for using it to further code.
let tempDynamicSerial = dynamicFormSerial;
change the state directly is not good coding, so I add the dynamicFormSerial state to other variable named tempDynamicSerial , so developer can change the array without changing the actual state and avoid mutation happend in code. 
tempDynamicSerial = [...tempDynamicSerial, tempDynamicSerial.length + 1];
Then using the distructing feature of es6 to add the new serial to tempDynamicSerial. For adding new element to array we can use this (last serial length + 1 ) calculation.
To change the state of the component we must use setState() function. when the state change, component will re-render itself.
this.setState({ dynamicFormSerial: tempDynamicSerial });
Then we need to add iteraction in render() function for rendeirng dynamic components and pass the props and action to DynamicComponent component:
{
  this.state.dynamicFormSerial &&
    this.state.dynamicFormSerial.map((item, index) => {
      return (<DynamicForm key={item} {...this.props} formSerial={item} />);
    })
}
First case, developer must check the invalid array or invalid state or empty state by using && operator, otherwise component render() function provide error map is not function for dyanmicFormSerial . To avoid this we can use this code this.state.dynamicFormSerial && <Component /> structure
Then add the Iteration by using map function, which provide item and index for each element of array:
this.state.dynamicFormSerial.map((item, index) => { })
We must return the DynamicForm component other wise, dyanmic component will not rendering to page, that is necessay for component render:
return (<DynamicForm key={item} {...this.props} formSerial={item} />);
{...this.props} is using of pass the App.js properties toDynamicComponent.js . key is needed for react component to generate.
The output of the code is
Figure: 1. 4 , output for diynamic form designDynamic Component Data Handling
Add the dynamicComponentData state to App.js State:




Figure: 3.1, change the state of App.js file2. Add the function to App.js which will get the data from dyamic component and serilize the data by specific component:



Figure 3.2 function for dynamic form data handling3. Pass the onChangeComponentData function to DynamicComponent.js by:



4. Modified the Input component at DynamicComponent.js by using this code:



Dynamic Form Delete Functionality
To delete the specific component from component list. we need to create function at App.js .



Figure: 2.1 Delete dynamic component functionslet removeIndex = null;    
dynamicComponentData.map((item, index) => {      
   if (item.formSerial === removeFormSerial) {        
     removeIndex = index;      
   }    
});
This code snippet are use for finding the index from dynamicComponentData for removing the data of cancel component. 
tempDynamicComponentData.splice(         tempDynamicComponentData.indexOf(removeIndex),1
);
Then using the index of removing item will using at array.splice method to delete data.
tempDynamicSerial.splice(tempDynamicSerial.indexOf(removeFormSerial), 1);
This line will using for find the from serial using removeFormSerial parameter with array.indexOf() function. using splice function to remove formSerial and delete it. and update the state and component will re-render.
Then pass it to DynamicComponent.js file. Also pass the From Serial for using it during delete the specific form. I have pass the serial number by formSerial to render() function.



Figure: 2.2, Pass the actions and other props to Dyamic FormremoveFormButtonClick = {this.removeFormButtonClick} using for pass the action from parent to chield component. 
After that, we can modify the DynamicComponent.js file. add the removeFormButtonClick() function to cancle button. The code is below:



Figure: 2.3, Add actions to DynamicComponent.js fileSave Dynamic From Data and Show Into List
To show the save data to page, we need to add the list section in App.js after dynamic form section , the code is describe below:



Figure 4.1 List design for dynamic form data listIn figure 4.1, we need to add the iteration of saveComponentData state for showing the list in table and check invlid saveComponentData array by using this.state.saveComponentData && {statement} .



Then changing the state for pusing the dynamicComponentData state to saveComponentData state. then empty the dynamicComponentData and dynamicFormSerial to remove the dynamic field from page and remove the data also.
