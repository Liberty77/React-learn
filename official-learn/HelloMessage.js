class HelloMessage extends React.component {
    
    render() {
        return (
            <div>
                Hello {this.props.name}
            </div>    
        );
    }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />>,
  mountNode
);

ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById("root")
);

const element = <h1>Hello, world</h1>
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
const user = {
    firstName: "Happer",
    lastName: "Perez"
};

const element1 = (
    <h1>
        Hello, {formatName(user)}
    </h1>
)

ReactDOM.render(
    element,
    document.getElementById('root')
)

function getGreeting(user) {
    if(user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>
}

const imgElement = <img src={user.avatarUrl}></img>;


function tick() {
    const element = (
        <div>
            <h1>Hello, World</h1>
            <h2>It is { new Date().toLocaleDateString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

class Welcome extends React.Component {
    render() {
        return <h1>Hello, {props.name}</h1>
    }
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: new Date() };
    }

    render() {
        return (
            <div>
                <h1>Hello, world</h1>
                <h2>It is {this.state.ate.toLocalTimeString()}.</h2>
            </div>
        );
    }

    componentDidMount() {

        this.timerId = setInterval(
            ()=> this.tick(), 1000)

    }

    componentWillUnmount() {
        clearInterval(this.timerId);

    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
)

this.setState({comment: 'Hello'});



