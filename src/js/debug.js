const debug = true;
export default function debugMsg(msg, type='log') {
	if (debug) {
		switch (type) {
			case 'error':
				console.error(msg);
				break;
			case 'warning':  
				console.warning(msg);
				break;
			default: 
				console.log(msg);
				break;
		}
	}
}