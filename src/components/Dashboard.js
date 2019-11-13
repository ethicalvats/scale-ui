import React from "react";
import { connect } from 'react-redux'

class Dashboard extends React.Component {
    state

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