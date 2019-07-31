import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';



const App = () => {
  
  return (
    <div className="ui container comments">
        <ApprovalCard >
          < CommentDetail 
            body={faker.lorem.sentence()} 
            author={faker.name.firstName()} 
            avatar={faker.image.avatar()} 
          />
        </ApprovalCard>

        <ApprovalCard >
          < CommentDetail 
            body={faker.lorem.sentence()} 
            author={faker.name.firstName()} 
            avatar={faker.image.avatar()} 
          />
        </ApprovalCard>
        
        <ApprovalCard >
          < CommentDetail 
            body={faker.lorem.sentence()} 
            author={faker.name.firstName()} 
            avatar={faker.image.avatar()} 
          />
        </ApprovalCard>

        <ApprovalCard >
          < CommentDetail 
            body={faker.lorem.sentence()} 
            author={faker.name.firstName()} 
            avatar={faker.image.avatar()} 
          />
        </ApprovalCard>

    </div>
  )
}

ReactDOM.render(< App />, document.querySelector('#root'));