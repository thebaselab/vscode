/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { tmpdir } from 'os';
import { existsSync, writeFileSync } from 'fs';
import { join } from 'vs/base/common/path';

suite('Flaky Once', () => {

	test('fails once', () => {
		const tmpPath = join(tmpdir(), 'fail-once-vsc.txt');
		if (!existsSync(tmpPath)) {
			writeFileSync(tmpPath, 'Hello World');
			throw new Error('Fail');
		}
	});
});
