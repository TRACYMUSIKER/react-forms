let h = React.createElement;



// class HomePage extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//       };
//     }


let idKeyGenerator = () => Math.floor(Math.random() * 6000);

const wassupData = [
    { id: idKeyGenerator(), content: 'This is a wassup post #1'},
    { id: idKeyGenerator(), content: 'This is a wassup post #2'},
];

class WassupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newWassup: ''
        }
    }
    render() {
    return h('form', { className: 'wassup-form',
        onSubmit: (event) => {
            event.preventDefault();
            // this.state.addWassup({newWassup : });
            console.log('submit!!!!!')
        }

    }, 
        h('input', { 
            value: this.state.newWassup,
            type: 'text', 
            className: 'wassup-input',
            placeholder: 'ok',
            onChange: (event) => {
                let value = event.target.value;
                // console.log(value);
                this.setState({ newWassup: value});
            }
        }),
        h('button', { type: 'submit', className: 'input-button', key: idKeyGenerator() }, 'Click here')
    )
}
}

let WassupIndividualPost = (props) => 
    wassupData.map(post => h('li', { key: post.id, className: 'wassup-posts' }, post.content))


let WassupList = (props) => 
    h('div', { className: 'wassup-posts-field' }, h(WassupIndividualPost));

let WassupHeader = (props) => h('h1', { className: 'header' }, 'Wassup');

let FormContainer = (props) => h('div', { className: 'form-div' }, h(WassupForm, null, null));

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wassups: []
        }
    }
    render() {
        let addWassup = (newWassup) => {
            this.setState({
                wassups: this.state.wassups.concat([
                    {
                        id: idKeyGenerator(), 
                        content: newWassup
                    }
                ])
            })
        }     
        return h('div', { key: idKeyGenerator(), className: 'main-div' }, [
            h(WassupHeader, { key: idKeyGenerator() }, null),
            h(FormContainer, { key: idKeyGenerator() }, null), 
            h(WassupList, { key: idKeyGenerator(), wassups: this.state.wassups}, null)])
    }
}

ReactDOM.render(h(Main, {wassupData}, null), document.querySelector('.react-root'));

