import {SlyvexWallet as BaseSlyvexWallet} from '/node_modules/@slyvex/ux/slyvex-ux.js';

class SlyvexWallet extends BaseSlyvexWallet{
	makeFaucetRequest(subject, args){
		let origin = 'https://faucet.slyvex.network';
		//origin = 'http://localhost:3000';
		const {address, amount} = args;
		let path = {
			'faucet-available': `available/${address}`,
			'faucet-request': `get/${address}/${amount}`
		}[subject];

		if(!path)
			return Promise.reject("Invalid request subject:"+subject)

		return fetch(`${origin}/api/${path}`, {
			method: 'GET'
		}).then(res => res.json())
	}
}

SlyvexWallet.define("slyvex-wallet")
