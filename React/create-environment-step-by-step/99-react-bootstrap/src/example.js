import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Example() {
  return (
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
      <strong>Oh snap! You got an error!</strong>
      <p>
        Change this and that and try again.
      </p>
      <button type="button" class="close" data-dismiss="alert" aria-level="close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

export default Example;