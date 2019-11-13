import React from "react";
import { connect } from 'react-redux'
import { getUsers } from "../actions";

class Dashboard extends React.Component {
    state
    constructor(props) {
        super(props)
    }

    render() {
        const { users } = this.props
        return <div>
            <h1>Dashboard</h1>
            <label>Total number of users: {users.length}</label>
        </div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Dashboard)