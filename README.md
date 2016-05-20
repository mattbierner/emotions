```bash
$ npm install emotions
```

A small npm module that adds emotions to your code.

```js
require('emotions/delight');
require('emotions').delight;
// or
import {delight} from 'emotions';
import delight from 'emotions/delight';

// Scale emotions for more nuance
require('emotions/love')(0.2); // 20% love

// Mix together multiple emotions
import {hope, envy} from 'emotions';
```


## Available Emotions
`emotions` provides 100% coverage of all human emotions, as defined by the [HUMAINE Emotion Annotation and Representation Language (EARL)][humaine]:

```
affection
amusement
anger
annoyance
anxiety
boredom
calm
contempt
content
courage
delight
despair
disappointment
disgust
doubt
elation
embarrassment
empathy
envy
excitement
fear
friendliness
frustration
guilt
happiness
helplessness
hope
hurt
interest
irritation
joy
love
pleasure 
politeness
powerlessness
pride
relaxed
relieved
sadness 
satisfaction
serene 
shame 
shock
stress
surprise
tension
trust
worry
```


## API
The top level `emotions` module contains all emotions:

```js
var anger = require('emotions').anger;
```

or, using import and destructuring:

```js
import {anger} from 'emotions';
```

You can also import specific emotions:

```js
var anger = require('emotions/anger');
import anger from 'emotions/anger';
```

### Scaling Emotions
By default, emotions are applied at 100% strength. You can also pass a scaling factor to the emotion for more nuanced emotional states:

```js
require('emotions/anger')(0.5); // 50% anger
require('emotions/excitement')(5.0); // 500% excitement
```

The top level module can also take a set of emotions to import and their weights:

```js
var emotions = require('emotions')({
    anger: 0.5,
    excitment; 5.0
});
```

### Mixing Emotions
Introduce multiple emotions into a single file just by adding multiple imports:

```js
import {love} from 'emotions';
import {elation} from 'emotions';

// or

import {love, elation} from 'emotions';
```



## Frequently Asked Questions

#### How does it work?
You can think of each emotion as a function with the following signature:

```js
function(world) {
    // something happens
    return newWorld;
}
```

Basically, it's the [IO monad][io] but for emotions. We call this construct the EIO monad.

#### When should I `require` emotions?
You can require `emotions` at any point. One common use case is to include emotions at the top of a file:

```js
import ...
import {despair} from 'emotions';

// 50000 lines of spaghetti code
```

You can also scope emotions to statements:

```js
...
{
    import {pride} from 'emotions';
    ...
}
...
```

or even scope emotions to individual expressions:

```js
import emotions from 'emotions';

...

var a = emotions.stress(1 + 2); // 3
```

#### What is the performance impact of emotions?
Depending on the required emotion and your Javascript engine, expect anything between a 2x speedup and a 97% slowdown:

Here's a simple benchmark:

```js
var emotionless = function() {
    return 1 + 2;
};

var withEmotions = function() {
    return emotions.stress(1 + 2);
};
```

In benchmarks, `withEmotions` is approximately 80% slower than its emotion free counterpart.



[humaine]: http://emotion-research.net/projects/humaine/earl
[io]: http://research.microsoft.com/en-us/um/people/simonpj/papers/marktoberdorf/mark.pdf