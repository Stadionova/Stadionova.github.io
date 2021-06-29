import React from 'react';
import { connect } from "react-redux";
import { catchApiRequest } from "../../store";
import Search from "./Search";
import store from '../../store';

const mapStateToProps = function () {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        showLoadingAnimation: () => {
            dispatch(catchApiRequest(true));
        },
        stopLoadingAnimation: () => {
            dispatch(catchApiRequest(false));
        }
    }
}

class SearchContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        store.subscribe(() => {
            this.setState({ isResponseGot: store.getState() });
        });
    }
    render() {
        return (
            <div>
                <Search
                    showLoadingAnimation={this.props.showLoadingAnimation}
                    stopLoadingAnimation={this.props.stopLoadingAnimation}
                    value={this.state.isResponseGot}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
