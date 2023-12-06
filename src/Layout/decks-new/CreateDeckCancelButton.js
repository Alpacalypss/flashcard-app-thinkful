import React from 'react';
import {useHistory} from 'react-router-dom';

export default function CreateDeckCancelButton() {
    const history = useHistory();

    return (
        <button className="btn btn-danger" onClick={() => history.push("/")}>
            <i className="bi bi-file-excel-fill"></i>Cancel
        </button>
  )
}
