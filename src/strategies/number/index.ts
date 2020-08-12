import {Maximum} from './maximum';
import {Minimum} from './minimum';
import {TypedSchemaStrategy} from '../typed-schema-strategy';
import _ from 'lodash';

export class NumberStrategy extends TypedSchemaStrategy {
	public type = 'number';
	public maximumStrategy: Maximum;
	public minimumStrategy: Minimum;

	constructor(schemaNode) {
		super(schemaNode);
		this.maximumStrategy = new Maximum();
		this.minimumStrategy = new Minimum();
	}

	public matchObject(object: any) {
		return _.isNumber(object);
	}

	public addObject(number: number) {
		super.addObject(number);
		this.maximumStrategy.addObject(number);
		this.minimumStrategy.addObject(number);
	}

	public addSchema(schema: Record<string, unknown>) {
		super.addSchema(schema);
		this.maximumStrategy.addSchema(schema);
		this.minimumStrategy.addSchema(schema);
	}

	public toSchema() {
		return {
			...super.toSchema(),
			...this.maximumStrategy.toSchema(),
			...this.minimumStrategy.toSchema()
		};
	}
}
