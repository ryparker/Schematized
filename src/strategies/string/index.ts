import {Format} from './format';
import {MaxLength} from './max-length';
import {MinLength} from './min-length';
import {TypedSchemaStrategy} from '../typed-schema-strategy';
import _ from 'lodash';

export class StringStrategy extends TypedSchemaStrategy {
	public type = 'string';
	public disabled: string[];
	public maxLengthStrategy: MaxLength;
	public minLengthStrategy: MinLength;
	public formatStrategy: Format;

	constructor(schemaNode) {
		super(schemaNode);
		this.disabled = [];
		this.maxLengthStrategy = new MaxLength();
		this.minLengthStrategy = new MinLength();
		this.formatStrategy = new Format();
	}

	public matchObject(object: any) {
		return _.isString(object);
	}

	public addObject(string: string) {
		super.addObject(string);

		if (!this.disabled.includes('maxLength'))
			this.maxLengthStrategy.addObject(string);

		if (!this.disabled.includes('minLength'))
			this.minLengthStrategy.addObject(string);

		if (!this.disabled.includes('format'))
			this.formatStrategy.addObject(string);
	}

	public addSchema(schema: Record<string, unknown>) {
		super.addSchema(schema);

		if (schema.disabled) this.disabled.push(...(schema.disabled as string[]));

		this.maxLengthStrategy.addSchema(schema);
		this.minLengthStrategy.addSchema(schema);
		this.formatStrategy.addSchema(schema);
	}

	public toSchema() {
		let schema = super.toSchema();
		schema = {...schema, ...this.maxLengthStrategy.toSchema()};
		schema = {...schema, ...this.minLengthStrategy.toSchema()};
		schema = {...schema, ...this.formatStrategy.toSchema()};

		return schema;
	}
}