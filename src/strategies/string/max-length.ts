import _ from 'lodash';

export class MaxLength {
	public keywords = new Set(['maxLength']);
	public maxLength: number | null = null;

	public addSchema(schema: Record<string, any>) {
		if (_.isNil(this.maxLength)) {
			this.maxLength = _.get(schema, 'maxLength');
		} else if (schema.maxLength) {
			this.maxLength = Math.max(this.maxLength, schema.maxLength);
		}
	}

	public addObject(string: string) {
		this.maxLength = _.isNil(this.maxLength)
			? string.length
			: Math.max(this.maxLength, string.length);
	}

	public toSchema() {
		return {maxLength: Math.round(this.maxLength)};
	}
}