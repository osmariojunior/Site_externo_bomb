import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/actions/actions';

import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

class Offsidebar extends Component {

    state = {
        activeTab: 'settings',
        offsidebarReady: false
    }

    componentDidMount() {
        // When mounted display the offsidebar
        this.setState({ offsidebarReady: true });
    }

    toggle = tab => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    handleSettingCheckbox = event => {
        this.props.actions.changeSetting(event.target.name, event.target.checked);
    }

    handleThemeRadio = event => {
        this.props.actions.changeTheme(event.target.value);
    }

    render() {

        return (
            this.state.offsidebarReady &&
            <aside className="offsidebar">
                { /* START Off Sidebar (right) */ }
                <nav>
                    <div>
                        { /* Nav tabs */ }
                        <Nav tabs justified>
                            <NavItem>
                                <NavLink className={ this.state.activeTab === 'settings' ? 'active':'' }
                                    onClick={() => { this.toggle('settings'); }}
                                >
                                    <em className="icon-equalizer fa-lg"></em>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        { /* Tab panes */ }
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="settings">
                                <h3 className="text-center text-thin mt-4">Configurações</h3>
                                <div className="p-2">
                                    <h4 className="text-muted text-thin">Layout</h4>
                                    <div className="clearfix">
                                        <p className="float-left">Fixed</p>
                                        <div className="float-right">
                                            <label className="switch">
                                                <input id="chk-fixed" type="checkbox" name="isFixed" checked={this.props.settings.isFixed} onChange={this.handleSettingCheckbox}/>
                                                <span></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="clearfix">
                                        <p className="float-left">Boxed</p>
                                        <div className="float-right">
                                            <label className="switch">
                                                <input id="chk-boxed" type="checkbox" name="isBoxed" checked={this.props.settings.isBoxed} onChange={this.handleSettingCheckbox}/>
                                                <span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-2">
                                    <h4 className="text-muted text-thin">Aside</h4>
                                    <div className="clearfix">
                                        <p className="float-left">Collapsed</p>
                                        <div className="float-right">
                                            <label className="switch">
                                                <input id="chk-collapsed" type="checkbox" name="isCollapsed" checked={this.props.settings.isCollapsed} onChange={this.handleSettingCheckbox}/>
                                                <span></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="clearfix">
                                        <p className="float-left">Collapsed Text</p>
                                        <div className="float-right">
                                            <label className="switch">
                                                <input id="chk-collapsed-text" type="checkbox" name="isCollapsedText" checked={this.props.settings.isCollapsedText} onChange={this.handleSettingCheckbox}/>
                                                <span></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="clearfix">
                                        <p className="float-left">Float</p>
                                        <div className="float-right">
                                            <label className="switch">
                                                <input id="chk-float" type="checkbox" name="isFloat" checked={this.props.settings.isFloat} onChange={this.handleSettingCheckbox}/>
                                                <span></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="clearfix">
                                        <p className="float-left">Hover</p>
                                        <div className="float-right">
                                            <label className="switch">
                                                <input id="chk-hover" type="checkbox" name="asideHover" checked={this.props.settings.asideHover} onChange={this.handleSettingCheckbox}/>
                                                <span></span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="clearfix">
                                        <p className="float-left">Show Scrollbar</p>
                                        <div className="float-right">
                                            <label className="switch">
                                                <input id="chk-scrollbar" type="checkbox" name="asideScrollbar" checked={this.props.settings.asideScrollbar} onChange={this.handleSettingCheckbox}/>
                                                <span></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </TabPane>
                        </TabContent>
                    </div>
                </nav>
                { /* END Off Sidebar (right) */ }
            </aside>
        );
    }

}

Offsidebar.propTypes = {
    actions: PropTypes.object,
    settings: PropTypes.object,
    theme: PropTypes.object
};

const mapStateToProps = state => ({ settings: state.settings, theme: state.theme })
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actions, dispatch) })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Offsidebar);
