import React from "react";
import { connect } from 'react-redux'

class Users extends React.Component {
    state

    render() {
        const { users } = this.props
        return <div>
            <h1>Users</h1>
            <div>
                <div className='show-list-data'>
                    <div>
                        <label>ID</label>
                    </div>
                    <div>
                        <label>Email</label>
                    </div>
                </div>
            </div>
            <div>
                {users.map((u,i) => <div key={i}>
                    <div className='show-list-data'>
                    <div>
                        <label>{u.id}</label>
                    </div>
                    <div>
                        <label>{u.email}</label>
                    </div>
                    </div>
                </div>)}
            </div>
        </div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        users : state.users
    }
}

export default connect(mapStateToProps)(Users)