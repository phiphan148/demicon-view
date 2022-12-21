import React from 'react';
import Card from 'react-bootstrap/Card';

function Result({userList}) {
  return (
    <div className="UserList">
      {
        userList.map((item) => (
          <div className="UserList-container" key={item.name}>
            {
              item.users.map((el) => (
                <Card className="UserList-item" key={el.name}>
                  <Card.Body>
                    <p><strong>Name:</strong> {el.name}</p>
                    <p><strong>Email:</strong> {el.email}</p>
                    <p><strong>Gender:</strong> {el.gender}</p>
                  </Card.Body>
                </Card>
              ))
            }
          </div>
        ))
      }
    </div>
  );
}

export default Result;
