import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
	<div>
		<h1>Info: </h1>
		<p>The info is: {props.info}</p>
	</div>
);

const withAdminWarning = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAdmin && <p>This is private info. Please dont share!</p>}
			<WrappedComponent {...props}/>
		</div>
	)
}

const requireAuthentiction = (WrappedComponent) => {
	return (props) => (
			<div>
				{props.isAuth ? (<WrappedComponent {...props}/>) : (<p>Please login to view this page</p>) }
			</div>
		)
 }

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentiction(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={true} info="There are the details" />, document.getElementById('app'));