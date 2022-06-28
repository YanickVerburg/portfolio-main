import React from 'react';
import '../styles/style.css';

export default class apiclient extends React.Component {
    state = {
        loading: true,
        project: null,
    };
    
    async componentDidMount() {
        const url = "http://localhost/PHP-API/api.php";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ project: data[0], loading: false });
    }


    render() {
        return (
            <header style={{ height: "100%" }}>
                {this.state.loading || !this.state.project ? (
                    <div>loading...</div>
                ) : (
                    <div>
                        <div>{ this.state.project.title }</div>
                    </div>
                )}
            </header>
        );
    }
}



