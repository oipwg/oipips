# OIPIP-0004 : Change name of OIP Object from Artifact to Record

```
Number:  OIPIP-0004
Title:   Change name of OIP Object from Artifact to Record
Type:    Standard
Status:  Draft
Authors: Davi Ortega <davi.ortega@pm.me>
Created: 2018-08-20
```

## Abstract

This OIPIP proposes to change the name of the data JSON Object in OIP from `Artifact` to `Record`.

## Motivation

The general name for an OIP Object is `Artifact`.

Ryan Taylor contributed with some history about the choice:

>The term comes from communications/media branch of academia and social sciences in which a cultural/social artifact is defined as anything created by humans which gives information about the culture of its creator and users. This includes songs, television episodes, movies, books, etc.
>A couple of sources:
>https://ivyroseroberts.wordpress.com/2015/08/22/what-is-a-media-artifact/
>https://en.wikipedia.org/wiki/Cultural_artifact


However, `Artifact` can be misinterpreted. The second definition in the Merriam-Webster dictionary is:

```
2.a : a product of artificial character (as in a scientific test) due usually to extraneous (such as human) agency
2.c : a defect in an image (such as a digital photograph) that appears as a result of the technology and methods used to create and process the image 
```

This is particularly bad for scientific use of OIP since it literally means "bad data". For example, when writing about ETDB:  

> We published over 10,000 tomography artifacts...  

literally reads: We published 10,000 tomography mistakes.  

`Record` on the other hand is less ambiguous. The definitions from the dictionary are:
```
1 : the state or fact of being recorded

2 : something that records: such as
  a : something that recalls or relates past events
  b : an official document that records the acts of a public body or officer
  c : an authentic official copy of a document deposited with a legally designated officer
  d : the official copy of the papers used in a law case

3 a (1) : a body of known or recorded facts about something or someone especially with reference to a particular sphere of activity that often forms a discernible pattern: _a good academic record_, _a liberal voting record_.(2) : a collection of related items of information (as in a database) treated as a unit
  b (1) : an attested top performance, (2) : an unsurpassed statistic
  
4 : something on which sound or visual images have been recorded; specifically : a disc with a spiral groove carrying recorded sound for phonograph reproduction
```
None of them can be easily confused in text or speech as far as we know.

Other reasons why `Record` is better (mostly empirical based on our experiences in explaining OIP to others):  
* We're already introducing FLO as a _public record_, and it is the easiest way to explain OIP as a means to distribute and monetize _digital content_ with its _record_ being published in the FLO Blockchain.
* *Record* communicates better what we're storing in the index.

The only argument that I forsee *against* the use of `Record` is that it could be confused with *musical records*. I think this ambiguity is less detrimental than confuse `Artifact` with *mistake*. I can see the problem in:

> I published my record using OIP.

Is that referent to the music record (aka Album) or to the OIP Object? However, I am inclined to think that this can be mitigated in articles or speech by changing the word "record" to "album" with no loss of clarity. This is impossible in the conundrum related to `Artifact` and *mistake*.


## Actions

- [ ] Change all mentions from `Artifact` to `Record` in OIP softwares.  
- [ ] Change all mentions from `Artifact` to `Record` in OIP documentation.  
- [ ] Change all mentions from `Artifact` to `Record` in OIP-related press articles in preparation.  
- [ ] Make official announcement.  

## References

[Artifact](https://www.merriam-webster.com/dictionary/artifact)  
[Record](https://www.merriam-webster.com/dictionary/record)
