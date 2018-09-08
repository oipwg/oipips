# OIPIP-0004 : Change name of OIP Object from Artifact to Record

```
Number:  OIPIP-0004
Title:   Change name of OIP Object from Artifact to Record
Type:    Standards Track
Status:  Draft
Authors: Davi Ortega <davi.ortega@pm.me>
Created: 2018-08-20
```

## Abstract

This OIPIP proposes to change the name of the data JSON Object in OIP from `Artifact` to `Record`.

## Motivation

If you lookup "Artifact" in the Merriam-Webster dictionary, two examples in the second definition of the word explain that it is commonly used to describe "defects" in data.

In order to prevent confusion for new users, we were motivated to use a different word that would be misinterpreted less.

The term `Record` is much less ambiguous, and thus we were motivated to choose that word.

## Rationale

The word "Artifact" was [initially selected because of the following definition](https://github.com/oipwg/oipips/pull/3#issuecomment-414626885):

>The term comes from communications/media branch of academia and social sciences in which a cultural/social artifact is defined as anything created by humans which gives information about the culture of its creator and users. This includes songs, television episodes, movies, books, etc.
>A couple of sources:
>https://ivyroseroberts.wordpress.com/2015/08/22/what-is-a-media-artifact/
>https://en.wikipedia.org/wiki/Cultural_artifact

The full definition for ["Artifact" in the Merriam-Webster dictionary](https://web.archive.org/web/20180908021803/https://www.merriam-webster.com/dictionary/artifact) is:

```
1a. a usually simple object (such as a tool or ornament) showing human workmanship or modification as distinguished from a natural object; especially : an object remaining from a particular period caves containing prehistoric artifacts
1b. something characteristic of or resulting from a particular human institution, period, trend, or individual
	"…morality is an artifact of human culture, devised to help us negotiate social relations." —Michael Pollan
1c. something or someone arising from or associated with an earlier time especially when regarded as no longer appropriate, relevant, or important
	"…that over-simplified but eloquent quality that keeps Jefferson alive for us while Washington and Adams, his superiors in so many other respects, are artifacts of a quaint and lost world." —Jack Rakove

2a. a product of artificial character (as in a scientific test) due usually to extraneous (such as human) agency
2b. an electrocardiographic and electroencephalographic wave that arises from sources other than the heart or brain
2c. a defect in an image (such as a digital photograph) that appears as a result of the technology and methods used to create and process the image
	"… can produce a very good picture, but there will be some loss of detail and some color artifacts such as adjacent colors bleeding into each other."" —Consumer Reports
```

This is particularly bad for scientific use of OIP since it can literally mean "bad data". 


For example, if Caltech released a statement about ETDB to the scientific community explaining that they "published over 10,000 tomography artifacts", many scientists might use the second definition of Artifact and think that they "published 10,000 tomography mistakes".


`Record` on the other hand is much less ambiguous. [The definition of "record" in the Merriam-Webster dictionary](https://web.archive.org/web/20180908021846/https://www.merriam-webster.com/dictionary/record) is:
```
1a. to set down in writing, furnish written evidence of, or to deposit an authentic official copy of
	"record a deed"
1b. to state for or as if for the record
	"voted in favor but recorded certain reservations"
1c. to register permanently by mechanical means earthquake shocks recorded by a seismograph
	"the thermometer recorded 90°"

2. to give evidence of

3. to cause (sound, visual images, data, etc.) to be registered on something (such as a disc or magnetic tape) in reproducible form
```

None of them can be easily confused in text or speech as far as we know.

Other reasons why `Record` is better (mostly empirical based on our experiences in explaining OIP to others):  
* The Blockchain that OIP stores its data in, FLO, is often introduced as a _public record_, and it is the easiest way to explain OIP as a means to distribute and monetize _digital content_ with its _record_ being published in the FLO Blockchain.
* *Record* communicates better what we're storing in the index.

The only argument (so far) *against* the use of `Record` is that it could be confused with *musical records* (i.e. Vinyl). 

If, for example, a music Artist released a statement explaining that they "published a record using OIP", it might be confusing to understand if they were talking about an Album, or a general OIP Object.

I propose that the possible ambiguity with musical records is, however, less detrimental than confusing `Artifact` with a data *defect*. 

## Backwards Compatibility

All OIP Objects published before the change in name from `Artifact` to `Record` should still be accepted as valid. 

After this OIPIP has changed Status to Active, then OIP Objects published with the "Artifact" name should *not* be seen as valid.

All Frontends will need to update the Client modules used to retrieve data from OIP.

## References

[Artifact Definition in the Merriam Webster Dictionary](https://web.archive.org/web/20180908021803/https://www.merriam-webster.com/dictionary/artifact)  
[Record Definition in the Merriam Webster Dictionary](https://web.archive.org/web/20180908021846/https://www.merriam-webster.com/dictionary/record)
