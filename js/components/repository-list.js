import React from 'react';
import {connect} from 'react-redux';

import Repository from './repository';
import * as actions from '../actions/index';



export class RepositoryList extends React.Component {

    constructor(props) {
        super(props);
        this.addRepository = this.addRepository.bind(this);
    }

    addRepository() {
        const repositoryName = this.repositoryNameInput.value;
        this.props.dispatch(actions.addRepository(repositoryName));
    }

    render() {
        const repositories = this.props.repositories.map(repository => {
            return <Repository repository={repository} key={repository.name} />;
        });

        return (
            <div className="repository-list">
                <h4>Enter User/repo to lookup description on https://api.github.com/repos/ </h4>
                {repositories}
                <input type="text" ref={ref => this.repositoryNameInput = ref}
                value="bitcoin/bitcoin" />
                <button type="button" onClick={this.addRepository}>
                    Add repository
                </button>
            </div>
        );
    }
}


const mapStateToProps = (state, props) => ({
    repositories: state
});

export default connect(mapStateToProps)(RepositoryList);
