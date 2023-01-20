export default function TodoApp(){

    return ( 
    <div className="todoContainer">
        <form className="todoCreateForm">
            <input className="todoInput" />
            <input type="submit" value="Create todo" className="buttonCreate" />
        </form>
    </div>
    );
}

