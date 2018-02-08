# react-auto-progress

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

> A zero configuration progress loading bar component for React.

Just add a reference and it’s done.
 
The component interact with every ajax requisition to add a google top progress bar style 

```javascript
<script>
import AutoProgress from 'react-auto-progress'

//In your root component

render() {
	return <div>
		<AutoProgress />
		<YourComponents />
	</div>
}

</script>
```


