# OIPIP-0001 : OIPIP Purpose, Process, and Guidelines

```
Number:  OIPIP-0001
Title:   OIPIP Purpose, Process, and Guidelines
Type:    Informational
Status:  Draft
Authors: Sky Young <sky@alexandria.io>
Created: 2018-05-30
```

## Abstract

A Open Index Protocol Improvement Proposal (OIPIP) is a design document providing information to the OIP community, or describing a new feature for OIP or its processes or environment. The OIPIP should provide a concise technical specification of the feature and a rationale for the feature.

We intend OIPIPs to be the primary mechanisms for proposing new features, for collecting community input on an issue, and for documenting the design decisions that have gone into OIP. The OIPIP author is responsible for building consensus within the community and documenting dissenting opinions.

Because the OIPIPs are maintained as text files in a versioned repository, their revision history is the historical record of the feature proposal.

This process is very similar to the [Bitcoin BIP](https://github.com/bitcoin/bips/blob/master/bip-0002.mediawiki) process.

## Copyright

 This OIPIP is dual-licensed under the Open Publication License and BSD 2-clause license.

## OIPIP workflow

The OIPIP process begins with a new idea for OIP. Each potential OIPIP must have a champion -- someone who writes the OIPIP using the style and format described below, shepherds the discussions in the appropriate forums, and attempts to build community consensus around the idea. The OIPIP champion (a.k.a. Author) should first attempt to ascertain whether the idea is OIPIP-able. Small enhancements or patches to a particular piece of software often don't require standardisation between multiple projects; these don't need a OIPIP and should be injected into the relevant project-specific development workflow with a patch submission to the applicable issue tracker. The best way to proceed is by posting about the new idea on the OIPWG Forum.

Vetting an idea publicly before going as far as writing a OIPIP is meant to save both the potential author and the wider community time. Asking the OIP community first if an idea is original helps prevent too much time being spent on something that is guaranteed to be rejected based on prior discussions (searching the internet does not always do the trick). It also helps to make sure the idea is applicable to the entire community and not just the author. Just because an idea sounds good to the author does not mean it will work for most people in most areas where OIP is used.

Once the champion has asked the OIP community as to whether an idea has any chance of acceptance, a draft OIPIP should be presented on the OIP Forum. This gives the author a chance to flesh out the draft OIPIP to make it properly formatted, of high quality, and to address additional concerns about the proposal. Following a discussion, the proposal should be submitted to the [OIPIPs git repository](https://github.com/oipwg/oipips) as a pull request. This draft must be written in OIPIP style as described below, and named with an alias such as "bip-johndoe-infinitebitcoins" until the editor has assigned it a BIP number (authors MUST NOT self-assign BIP numbers).

BIP authors are responsible for collecting community feedback on both the initial idea and the BIP before submitting it for review. However, wherever possible, long open-ended discussions on the OIP Forum should be avoided. Strategies to keep the discussions efficient include: setting up a separate OIP Forum post for the topic, having the OIPIP author accept private comments in the early design phases, setting up a wiki page or git repository, etc. OIPIP authors should use their discretion here.

It is highly recommended that a single OIPIP contain a single key proposal or new idea. The more focused the BIP, the more successful it tends to be. If in doubt, split your OIPIP into several well-focused ones.

When the OIPIP draft is complete, the OIPIP editor will assign the OIPIP a number, label it as Standards Track, Informational, or Process, and merge the pull request to the OIPIPs git repository. The OIPIP editor will not unreasonably reject a OIPIP. Reasons for rejecting OIPIPs include duplication of effort, disregard for formatting rules, being too unfocused or too broad, being technically unsound, not providing proper motivation or addressing backwards compatibility, or not in keeping with the OIP philosophy. For a OIPIP to be accepted it must meet certain minimum criteria. It must be a clear and complete description of the proposed enhancement. The enhancement must represent a net improvement. The proposed implementation, if applicable, must be solid and must not complicate the protocol unduly.

The OIPIP author may update the draft as necessary in the git repository. Updates to drafts should also be submitted by the author as pull requests.

### Transfering BIP Ownership

It occasionally becomes necessary to transfer ownership of OIPIPs to a new champion. In general, we'd like to retain the original author as a co-author of the transferred OIPIP, but that's really up to the original author. A good reason to transfer ownership is because the original author no longer has the time or interest in updating it or following through with the OIPIP process, or has fallen off the face of the 'net (i.e. is unreachable or not responding to email). A bad reason to transfer ownership is because you don't agree with the direction of the OIPIP. We try to build consensus around a OIPIP, but if that's not possible, you can always submit a competing OIPIP.

If you are interested in assuming ownership of a OIPIP, send a message asking to take over, addressed to both the original author and the OIPIP editor. If the original author doesn't respond to email in a timely manner, the OIPIP editor will make a unilateral decision (it's not like such decisions can't be reversed :).



### OIPIP Editors

The current OIPIP Editors are Devon James (who can be contacted at <devon@alexandria.io>), and Sky Young (who can be contacted at <sky@alexandria.io>).



### OIPIP Editor Responsibilities & Workflow

The OIPIP editor watches the OIP Forum. Off-list OIPIP-related correspondence should be sent (or CC'd) to [devon@alexandria.io](mailto:devon@alexandria.io).

For each new OIPIP that comes in an editor does the following:

- Read the OIPIP to check if it is ready: sound and complete. The ideas must make technical sense, even if they don't seem likely to be accepted.
- The title should accurately describe the content.
- The OIPIP draft must have been posted on the OIP Forum for discussion.
- Motivation and backward compatibility (when applicable) must be addressed.
- The defined Layer header must be correctly assigned for the given specification.
- Licensing terms must be acceptable for OIPIPs.

If the OIPIP isn't ready, the editor will send it back to the author for revision, with specific instructions.

Once the OIPIP is ready for the repository it should be submitted as a "pull request" to the [OIPIPs git repository](https://github.com/oipwg/oipips) where it may get further feedback.

The OIPIP editor will:

- Assign a OIPIP number in the pull request.
- Merge the pull request when it is ready.
- List the OIPIP in [README.md](https://github.com/oipwg/oipips/blob/master/README.md)

The OIPIP editors are intended to fulfill administrative and editorial responsibilities. The OIPIP editors monitor OIPIP changes, and update OIPIP headers as appropriate.

## OIPIP format and structure

### Specification

OIPIPs should be written in markdown format.

Each OIPIP should have the following parts:

- Preamble -- Headers containing metadata about the OIPIP ([see below](https://github.com/oipwg/oipips/blob/master/oipip-0001.md#OIPIP%20header%20preamble)).
- Abstract -- A short (~200 word) description of the technical issue being addressed.
- Copyright -- The OIPIP must be explicitly licensed under acceptable copyright terms ([see below](https://github.com/oipwg/oipips/blob/master/oipip-0001.md#OIPIP%20licensing)).
- Specification -- The technical specification should describe the syntax and semantics of any new feature. The specification should be detailed enough to allow competing, interoperable implementations for any of the current OIP platforms.
- Motivation -- The motivation is critical for OIPIPs that want to change the OIP protocol. It should clearly explain why the existing protocol is inadequate to address the problem that the OIPIP solves.
- Rationale -- The rationale fleshes out the specification by describing what motivated the design and why particular design decisions were made. It should describe alternate designs that were considered and related work. The rationale should provide evidence of consensus within the community and discuss important objections or concerns raised during discussion.
- Backwards compatibility -- All OIPIPs that introduce backwards incompatibilities must include a section describing these incompatibilities and their severity. The OIPIP must explain how the author proposes to deal with these incompatibilities.
- Reference implementation -- The reference implementation must be completed before any OIPIP is given status "Final", but it need not be completed before the OIPIP is accepted. It is better to finish the specification and rationale first and reach consensus on it before writing code. The final implementation must include test code and documentation appropriate for OIP.

#### OIPIP header preamble

Each OIPIP must begin with an RFC 822 style header preamble. The headers must appear in the following order. Headers marked with "*" are optional and are described below. All other headers are required.

```
  OIPIP: <OIPIP number, or "?" before being assigned>
* Layer: <Consensus (soft fork) | Consensus (hard fork) | Peer Services | API/RPC | Applications>
  Title: <OIPIP title; maximum 44 characters>
  Author: <list of authors' real names and email addrs>
* Discussions-To: <email address>
* Comments-Summary: <summary tone>
  Comments-URI: <links to wiki page for comments>
  Status: <Draft | Active | Proposed | Deferred | Rejected |
           Withdrawn | Final | Replaced | Obsolete>
  Type: <Standards Track | Informational | Process>
  Created: <date created on, in ISO 8601 (yyyy-mm-dd) format>
  License: <abbreviation for approved license(s)>
* License-Code: <abbreviation for code under different approved license(s)>
* Post-History: <dates of postings to OIP forum, or link to thread>
* Requires: <OIPIP number(s)>
* Replaces: <OIPIP number(s)>
* Superseded-By: <OIPIP number>
```

The Layer header (only for Standards Track BIPs) documents which layer of Bitcoin the BIP applies to. See [OIPIP 2](https://github.com/oipwg/oipips/blob/master/oipip-0002.md) for definitions of the various OIPIP layers. Activation of this OIPIP implies activation of OIPIP 2.

The Author header lists the names and email addresses of all the authors/owners of the OIPIP. The format of the Author header value must be

```
  Random J. User <address@dom.ain>
```

If there are multiple authors, each should be on a separate line following RFC 2822 continuation line conventions.

While a OIPIP is in private discussions (usually during the initial Draft phase), a Discussions-To header will indicate the forum post or URL where the OIPIP is being discussed. No Discussions-To header is necessary if the OIPIP is being discussed privately with the author, or on the OIP Rocket.Chat.

The Type header specifies the type of OIPIP: Standards Track, Informational, or Process.

The Created header records the date that the OIPIP was assigned a number, while Post-History is used to record when new versions of the OIPIP are posted to OIP Forum. Dates should be in yyyy-mm-dd format, e.g. 2001-08-14. Post-History is permitted to be a link to a specific thread in a mailing list archive.

OIPIPs may have a Requires header, indicating the OIPIP numbers that this OIPIP depends on.

OIPIPs may also have a Superseded-By header indicating that a OIPIP has been rendered obsolete by a later document; the value is the number of the OIPIP that replaces the current document. The newer OIPIP must have a Replaces header containing the number of the OIPIP that it rendered obsolete.

#### Auxiliary Files

OIPIPs may include auxiliary files such as diagrams. Auxiliary files should be included in a subdirectory for that OIPIP, or must be named OIPIP-XXXX-Y.ext, where "XXXX" is the OIPIP number, "Y" is a serial number (starting at 1), and "ext" is replaced by the actual file extension (e.g. "png").

## OIPIP types

There are three kinds of OIPIP:

- A Standards Track OIPIP describes any change that affects most or all OIP implementations, such as a change to the network protocol, publishing protocol, a change in block or transaction validity rules, or any change or addition that affects the interoperability of applications using OIP. Standards Track OIPIPs consist of two parts, a design document and a reference implementation.
- An Informational OIPIP describes a OIP design issue, or provides general guidelines or information to the OIP community, but does not propose a new feature. Informational OIPIPs do not necessarily represent a OIP community consensus or recommendation, so users and implementors are free to ignore Informational OIPIPs or follow their advice.
- A Process OIPIP describes a process surrounding OIP, or proposes a change to (or an event in) a process. Process OIPIPs are like Standards Track OIPIPs but apply to areas other than the OIP itself. They may propose an implementation, but not to OIP's codebase; they often require community consensus; unlike Informational OIPIPs, they are more than recommendations, and users are typically not free to ignore them. Examples include procedures, guidelines, changes to the decision-making process, and changes to the tools or environment used in OIP development. Any meta-OIPIP is also considered a Process OIPIP.

## OIPIP status field

### Specification

The typical paths of the status of OIPIPs are as follows:

![img](https://raw.githubusercontent.com/oipwg/oipips/master/oipip-0001/process.png)

Champions of a OIPIP may decide on their own to change the status between Draft, Deferred, or Withdrawn. The OIPIP editor may also change the status to Deferred when no progress is being made on the OIPIP.

A OIPIP may only change status from Draft (or Rejected) to Proposed, when the author deems it is complete, has a working implementation (where applicable), and has community plans to progress it to the Final status.

OIPIPs should be changed from Draft or Proposed status, to Rejected status, upon request by any person, if they have not made progress in three years. Such a OIPIP may be changed to Draft status if the champion provides revisions that meaningfully address public criticism of the proposal, or to Proposed status if it meets the criteria required as described in the previous paragraph.

An Proposed OIPIP may progress to Final only when specific criteria reflecting real-world adoption has occurred. This is different for each OIPIP depending on the nature of its proposed changes, which will be expanded on below. Evaluation of this status change should be objectively verifiable, and/or be discussed on the development mailing list.

When a Final OIPIP is no longer relevant, its status may be changed to Replaced or Obsolete (which is equivalent to Replaced). This change must also be objectively verifiable and/or discussed.

A process OIPIP may change status from Draft to Active when it achieves rough consensus on the OIP Forum. Such a proposal is said to have rough consensus if it has been open to discussion on the OIP Forum for at least one month, and no person maintains any unaddressed substantiated objections to it. Addressed or obstructive objections may be ignored/overruled by general agreement that they have been sufficiently addressed, but clear reasoning must be given in such circumstances.

#### Progression to Final status

OIPIPs move to Final status after the OIPWG decides the OIPIP is complete AND/OR by consensus among the OIP Community.

### Rationale

We can only hope to achieve accuracy in regard to the "Status" field by striving to reflect the reality of *how things actually are*, rather than *how they should be*.

## OIPIP comments

### Specification

Each OIPIP should, in its preamble, link to a public wiki page with a summary tone of the comments on that page. Reviewers of the OIPIP who consider themselves qualified, should post their own comments on this wiki page. The comments page should generally only be used to post final comments for a completed OIPIP. If a OIPIP is not yet completed, reviewers should instead post on the applicable forum thread to allow the OIPIP author(s) to address any concerns or problems pointed out by the review.

Some OIPIPs receive exposure outside the development community prior to completion, and other OIPIPs might not be completed at all. To avoid a situation where critical OIPIP reviews may go unnoticed during this period, reviewers may, at their option, still post their review on the comments page, provided they first post it to the forum and plan to later remove or revise it as applicable based on the completed version. Such revisions should be made by editing the previous review and updating the timestamp. Reviews made prior to the complete version may be removed if they are no longer applicable and have not been updated in a timely manner (eg, within one month).

Pages must be named after the full OIPIP number (eg, "OIPIP 0001") and placed in the "Comments" namespace. For example, the link for BIP 1 will be <https://github.com/oipwg/oipips/wiki/Comments:OIPIP-0001> .

Comments posted to this wiki should use the following format:

```
    <Your opinion> --<Your name>, <Date of posting, as YYYY-MM-DD>
```

OIPIPs may also choose to list a second forum for OIPIP comments, in addition to the OIPIPs wiki. In this case, the second forum's URI should be listed below the primary wiki's URI.

After some time, the OIPIP itself may be updated with a summary tone of the comments. Summary tones may be chosen from the following, but this OIPIP does not intend to cover all possible nuances and other summaries may be used as needed:

- No comments yet.
- Unanimously Recommended for implementation
- Unanimously Discourage for implementation
- Mostly Recommended for implementation, with some Discouragement
- Mostly Discouraged for implementation, with some Recommendation

For example, the preamble to BIP 1 might be updated to include the line:

```
    Comments-Summary: No comments yet.
    Comments-URI: https://github.com/oipwg/oipips/wiki/Comments:OIPIP-0001
                  https://some-other-wiki.org/OIPIP_1_Comments
```

These fields must follow the "Discussions-To" header defined.

To avoid doubt: comments and status are unrelated metrics to judge a OIPIP, and neither should be directly influencing the other.

### Rationale

What is the purpose of OIPIP comments?

- Various OIPIPs have been adopted (the criteria required for "Final" Status) despite being considered generally inadvisable. Some presently regard OIPIPs as a "good idea" simply by virtue of them being assigned a OIPIP number. Due to the low barrier of entry for submission of new OIPIPs, it seems advisable for a way for reviewers to express their opinions on them in a way that is consumable to the public without needing to review the entire development discussion.

Will OIPIP comments be censored or limited to particular participants/"experts"?

- Participants should freely refrain from commenting outside of their area of knowledge or expertise. However, comments should not be censored, and participation should be open to the public.

## OIPIP licensing

### Specification

New OIPIPs may be accepted with the following licenses. Each new OIPIP must identify at least one acceptable license in its preamble. The License header in the preamble must be placed after the Created header. Each license must be referenced by their respective abbreviation given below.

For example, a preamble might include the following License header:

```
    License: BSD-2-Clause
             GNU-All-Permissive
```

In this case, the OIPIP text is fully licensed under both the OSI-approved BSD 2-clause license as well as the GNU All-Permissive License, and anyone may modify and redistribute the text provided they comply with the terms of *either* license. In other words, the license list is an "OR choice", not an "AND also" requirement.

It is also possible to license source code differently from the OIPIP text. A optional License-Code header is placed after the License header. Again, each license must be referenced by their respective abbreviation given below.

For example, a preamble specifying the optional License-Code header might look like:

```
    License: BSD-2-Clause
             GNU-All-Permissive
    License-Code: GPL-2.0+
```

In this case, the code in the OIPIP is not available under the BSD or All-Permissive licenses, but only under the terms of the GNU General Public License (GPL), version 2 or newer. If the code were to be available under *only* version 2 exactly, the "+" symbol should be removed from the license abbreviation. For a later version (eg, GPL 3.0), you would increase the version number (and retain or remove the "+" depending on intent).

```
    License-Code: GPL-2.0   # This refers to GPL v2.0 *only*, no later license versions are acceptable.
    License-Code: GPL-2.0+  # This refers to GPL v2.0 *or later*.
    License-Code: GPL-3.0   # This refers to GPL v3.0 *only*, no later license versions are acceptable.
    License-Code: GPL-3.0+  # This refers to GPL v3.0 *or later*.
```

In the event that the licensing for the text or code is too complicated to express with a simple list of alternatives, the list should instead be replaced with the single term "Complex". In all cases, details of the licensing terms must be provided in the Copyright section of the OIPIP.

OIPIPs are not required to be *exclusively* licensed under approved terms, and may also be licensed under unacceptable licenses *in addition to* at least one acceptable license. In this case, only the acceptable license(s) should be listed in the License and License-Code headers.

#### Recommended licenses

- BSD-2-Clause: [OSI-approved BSD 2-clause license](https://opensource.org/licenses/BSD-2-Clause)
- BSD-3-Clause: [OSI-approved BSD 3-clause license](https://opensource.org/licenses/BSD-3-Clause)
- CC0-1.0: [Creative Commons CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)
- GNU-All-Permissive: [GNU All-Permissive License](http://www.gnu.org/prep/maintain/html_node/License-Notices-for-Other-Files.html)

In addition, it is recommended that literal code included in the OIPIP be dual-licensed under the same license terms as the project it modifies. For example, literal code intended for OIP Daemon would ideally be dual-licensed under the MIT license terms as well as one of the above with the rest of the OIPIP text.

#### Not recommended, but acceptable licenses

- Apache-2.0: [Apache License, version 2.0](http://www.apache.org/licenses/LICENSE-2.0)
- BSL-1.0: [Boost Software License, version 1.0](http://www.boost.org/LICENSE_1_0.txt)
- CC-BY-4.0: [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/)
- CC-BY-SA-4.0: [Creative Commons Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/)
- MIT: [Expat/MIT/X11 license](https://opensource.org/licenses/MIT)
- AGPL-3.0+: [GNU Affero General Public License (AGPL), version 3 or newer](http://www.gnu.org/licenses/agpl-3.0.en.html)
- FDL-1.3: [GNU Free Documentation License, version 1.3](http://www.gnu.org/licenses/fdl-1.3.en.html)
- GPL-2.0+: [GNU General Public License (GPL), version 2 or newer](http://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
- LGPL-2.1+: [GNU Lesser General Public License (LGPL), version 2.1 or newer](http://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html)

#### Not acceptable licenses

All licenses not explicitly included in the above lists are not acceptable terms for a Open Index Protocol Improvement Proposal unless a later OIPIP extends this one to add them. However, OIPIPs predating the acceptance of this OIPIP were allowed under other terms, and should use these abbreviation when no other license is granted:

- OPL: [Open Publication License, version 1.0](http://opencontent.org/openpub/)
- PD: Released into the public domain

### Rationale

Why are there software licenses included?

- Some OIPIPs, especially consensus/protocol layer, may include literal code in the OIPIP itself which may not be available under the exact license terms of the OIPIP.
- Despite this, not all software licenses would be acceptable for content included in OIPIPs.

Why is Public Domain not acceptable for OIPIPs?

- In some jurisdictions, public domain is not recognised as a legitimate legal action, leaving the OIPIP simply copyrighted with no redistribution or modification allowed at all. 

## References

[BIP 2: BIP process, revised](https://github.com/bitcoin/bips/blob/master/bip-0002.mediawiki)