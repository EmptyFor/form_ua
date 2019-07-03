import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import CreateAdvertBtn from '../../../common/CreateAdvertBtn';
// import { bindActionCreators } from 'redux';
// import { Row, Dropdown, Menu } from 'antd';
// import cn from 'classnames';
// import { map } from 'lodash';
// import { logout } from '../../../../store/actions/authorize';
// import { updateContract } from '../../../../store/actions/user';
// import logo from '../../../../assets/images/logo.png';
// import navigation from '../../../../config/navigation';
// import links from '../../../../config/links';
// import groups from '../../../../core/constants/groups';
import styles from './styles.module.scss';
import main_logo from '../../../../assets/images/logo@2x.png'
import links from '../../../../config/links';

// class Header extends Component {

//   static propTypes = {
//     user: PropTypes.object,
//     updateContract: PropTypes.func,
//     logout: PropTypes.func,
//   }

//   handleSelectContract = (id) => () => {
//     const contract = this.props.user.contracts.find(item => item.contract['_id'] === id);
//     this.props.updateContract(contract);
//   }

//   renderMenuItem = (item, i) => {
//     return (
//       <NavLink
//         key={i}
//         to={item.to}
//         className={styles.menuItem}
//         activeClassName={cn(styles.active, {[styles.withNavigation]: item.isParent})}
//       >
//         <i className={cn(item.icon, styles.menuItemIcon)} />
//         <span>{item.title}</span>
//       </NavLink>
//     )
//   }

//   renderMenuItems = () => {
//     const { selectedContract } = this.props.user;

//     const groups = selectedContract.groups || [];
//     const items = Object.values(navigation);

//     return items.map((item, i) => {
//       let isItemAvailable = false;

//       if (item.hasOwnProperty('group') && (groups.includes(item.group) || item.group === 'home')) {
//         isItemAvailable = true;
//       } else if (item.hasOwnProperty('groups')) {
//         const index = item.groups.findIndex(s => groups.includes(s));
//         if (index > -1) isItemAvailable = true;
//       }

//       if (isItemAvailable) {
//         return this.renderMenuItem(item, i);
//       }

//       return null;
//     });
//   }

//   renderUserDropdown = () => {
//     const { email, nameLast, nameFirst } = this.props.user;
//     const menu = (
//       <Menu>
//         <div className={styles.userDetails}>
//           <div className={styles.userName}>{`${nameLast} ${nameFirst}`}</div>
//           <div className={styles.userEmail}>{email}</div>
//         </div>
//         <Menu.Divider />
//         <Menu.Item>
//           <Link to={links.profileSettings}>Profile settings</Link>
//         </Menu.Item>
//         <Menu.Item>
//           <Link to={links.help}>Help / FAQ</Link>
//         </Menu.Item>
//         <Menu.Item>
//           <div onClick={this.props.logout}>Sign out</div>
//         </Menu.Item>
//       </Menu>
//     );

//     return (
//       <Dropdown overlay={menu} placement="bottomRight" overlayStyle={{width: '272px'}}>
//         <span
//           className={cn(
//             'ant-dropdown-link',
//             styles.link,
//             {[styles.withNotifications]: false}
//           )}
//         >
//           <i className="icon-person" />
//         </span>
//       </Dropdown>
//     )
//   }

//   renderContractsDropdown = () => {
//     const { contracts: detailedContracts, selectedContract } = this.props.user;

//     const contracts = map(detailedContracts, n => ({
//       id: n.contract['_id'],
//       name: n.contract['name']
//     }));

//     const contractName = selectedContract.contract.name;

//     const menu = (
//       <Menu>
//         <div className={styles.dropdownTitle}>Current Contract</div>
//         <Menu.Item>
//           {
//             selectedContract.groups.includes(groups.CONTRACTADMIN)
//               ? (
//                 <Link to={links.contractSettings} className={styles.contractSettings}>
//                   <span>{contractName}</span>
//                   <i className="icon-settings" />
//                 </Link>
//               ) : <div className={styles.contractSettings}>{contractName}</div>
//           }
//         </Menu.Item>
//         <Menu.Divider />

//         {
//           contracts.length > 0 ? (
//               <Fragment>
//                 <div className={styles.dropdownTitle}>Switch Contract</div>
//                 {
//                   contracts.map((item, i) => (
//                     <div className="ant-dropdown-menu-item" role="menuitem" key={i}>
//                       <div onClick={this.handleSelectContract(item.id)}
//                         className={styles.contractItem}
//                       >{item.name}</div>
//                     </div>
//                   ))
//                 }
//               </Fragment>
//           ) : null
//         }
//       </Menu>
//     );

//     return (
//       <Dropdown overlay={menu} placement="bottomRight" overlayStyle={{width: '252px'}}>
//         <span className={cn('ant-dropdown-link', styles.link)}>
//           <i className="icon-contract" />
//         </span>
//       </Dropdown>
//     )
//   }

//   render() {
//     const { user } = this.props;

//     return (
//       <header className={styles.header}>
//         <div className="container">
//           <Row type="flex" justify="space-between" align="middle">
//             <a href="/" className={styles.logo}>
//               <img src={logo} alt="logo"/>
//             </a>

//             <nav>
//               { this.renderMenuItems() }
//             </nav>

//             <div>
//               {
//                 user.isAdmin && (
//                   <Fragment>
//                     <Link to={links.admin} className={styles.link}>
//                       <i className="icon-computer" />
//                     </Link>
//                   </Fragment>
//                 )
//               }
//               {
//                 (user.isAdmin && user.isSupport)  && (
//                   <Fragment>
//                     <Link to={links.tech} className={styles.link}>
//                       <i className="icon-settings" />
//                     </Link>
//                   </Fragment>
//                 )
//               }

//               { this.renderUserDropdown() }

//               { this.renderContractsDropdown() }

//             </div>
//           </Row>
//         </div>
//       </header>
//     );
//   }
// }

// export default connect(
//   (state) => ({
//     user: state.user
//   }),
//   dispatch => ({
//     updateContract: bindActionCreators(updateContract, dispatch),
//     logout: bindActionCreators(logout, dispatch)
//   })
// )(Header);



class Header extends Component {

  handleClick = e => {
    console.log(e)
  }
  render() {
    console.log(links)
    return (
      <header className="menu">
        <div className={styles.language} id="language">
          <p>
            Language
          </p>
        </div>
        <Link className={styles.main_logo} to={links.login}>
          <img src={main_logo} onClick={this.handleClick}></img>
        </Link>

        <div className={styles.right_side}>
          <Link className={styles.create_advert} to={links.createAdvert}>
            <CreateAdvertBtn />
          </Link>
          <div className={styles.profile}>
            <p>
              Profile
            </p>
          </div>
        </div>
      </header>
    )
  }
}

export default connect(
  (state) => ({}),
  dispatch => ({
    // actions: bindActionCreators(actions, dispatch)
  })
)(Header);