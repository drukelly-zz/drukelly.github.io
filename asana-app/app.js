
const options = {
  asanaTaskURL: 'https://app.asana.com/0',
  JSONDataURL: 'https://app.asana.com/api/1.0/projects',
  projectID: 579682991934906,
  PTA: '0/55f4a4a00cf638909180146462a3fcba'
};

function getJSON(JSONURL, callback) {
  const _this = this,
        request = new XMLHttpRequest();
  request.onload = function(e) {
    if (request.status >= 200 && request.status < 400) {
      // success!
      callback.call(_this, e.target.response);
    } else {
      console.log('reached target server but returned an error');
    }
  }
  request.onerror = function() {
    console.log('connection error of some sort');
  }
  request.open('GET', JSONURL, true);
  request.responseType = 'json';
  request.setRequestHeader('Authorization', `Bearer ${options.PTA}`);
  request.send();
}

function getProjectTitle() {
  getJSON(`${options.JSONDataURL}/${options.projectID}`, function(e) {
    const headerElement = document.querySelector('header div'),
          header = document.createElement('h1');
          header.classList.add('f3', 'flex', 'items-center', 'ma0', 'pv3');
    header.innerHTML = e.data.name;
    headerElement.appendChild(header);
  });
}

function buildTasksList() {
  getJSON(`${options.JSONDataURL}/${options.projectID}/tasks`, function(e) {
    const taskUL = document.createElement('ul'),
          app = document.getElementById('app');
    taskUL.classList.add('list', 'pl0');
    for (let i = 0; i < e.data.length; i++) {
      const taskLI = document.createElement('li');
      taskLI.classList.add('ba', 'bl-0', 'bt-0', 'br-0', 'b--black-30', 'flex', 'items-center', 'lh-copy', 'pv2');
      const taskLink = document.createElement('a');
      setAttributes(taskLink, {
        'href' : `${options.asanaTaskURL}/${options.projectID}/${e.data[i].id}`,
        'target' : '_blank' });
      taskLink.innerHTML = e.data[i].name;
      taskLink.classList.add('blue', 'link');
      const hideTaskLink = document.createElement('a');
      setAttributes(hideTaskLink, {
        'class' : 'mr1',
        'onclick' : 'hideTask(this)' });
      taskLI.appendChild(hideTaskLink);
      taskLI.appendChild(taskLink);
      taskUL.appendChild(taskLI);
    }
    app.appendChild(taskUL);
  });
}

function hideTask(e) {
  const parent = document.querySelector('ul');
  const target = e.parentNode;
  parent.removeChild(target);
}

function setAttributes(element, attributes) {
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

getProjectTitle();
buildTasksList();
