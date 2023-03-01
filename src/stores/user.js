const { ObjectId } = require("mongodb");

class UserService {
	constructor(client) {
		this.User = client.db().collection("users");
	}


	async findOne(filter) {
		return await this.User.findOne(filter);
	}

	async findById(id) {
		return await this.User.findOne({
			_id: ObjectId.isValid(id) ? new ObjectId(id) : null,
		});
	}
}

module.exports = UserService;
