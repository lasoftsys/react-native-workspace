/* eslint-disable */
export default {
	displayName: 'cargo-util-interfaces',
	preset: '../../../jest.preset.js',
	transform: {
		'^.+\\.[tj]sx?$': [
			'ts-jest',
			{
				tsconfig:
					'<rootDir>/tsconfig.spec.json'
			}
		]
	},
	moduleFileExtensions: [
		'ts',
		'tsx',
		'js',
		'jsx'
	],
	coverageDirectory:
		'../../../coverage/libs/cargo/util-interfaces'
};
