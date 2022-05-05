function getGift() {
	const gifts = [ 'Jewelry', 'Money', 'A Fancy Gadget', 'A Supercar', 'Something Valuable' ];
	return gifts[Math.floor(Math.random() * gifts.length)];
}
class JSXDemo extends React.Component {
	render() {
		return (
			<div>
				<h1>My gift is: {getGift()}</h1>
			</div>
		);
	}
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));
