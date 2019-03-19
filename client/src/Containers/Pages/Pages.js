import React, {Component, Fragment} from 'react';
import axios from '../../axios-config';
import './Pages.css';

class Pages extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
            didMount: false

        };
    }


    componentDidMount() {
        this.setState({didMount: true});
     }

    componentDidUpdate(prevProps) {

        if ((prevProps.location.pathname !== prevProps.history.location.pathname) || this.state.didMount === true) {
            axios.get(prevProps.history.location.pathname)
                .then(responce => {

                    this.setState({data: responce.data, didMount: false})
                })
        }
    }

    render() {

        return (
            <Fragment>
                {!this.state.data ? '' : this.state.data.map((item, index) => {
                    return (
                        <div key = {index} className="Content">
                            <h2>{item.title}</h2>
                            <p>{item.content}</p>
                        </div>
                    )
                })}
            </Fragment>
        )
    }
}

export default Pages;