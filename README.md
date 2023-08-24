# React template

This project was created with
[Create React App](https://github.com/facebook/create-react-app). To get
acquainted and configure additional features
[refer to documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## Social network profile

We need to create a Profile component with which we could display information
about a social network user.

The component must accept several props with information about the user:

username — user name <br> tag — Social network tag without @ <br> location —
city and country <br> avatar — link to image stats — object with information
about activity <br>

## Statistics Section

Create a component Statistics, which would display statistics on the transferred
props. For example, uploads to the cloud by file type, webpage visits by users
from different countries, financial expenses, etc.

Description of the Statistics component The component must accept two props
title and stats, in which the header and the statistics object are specified.

title - is optional, and if it is not provided, the h2 header markup should not
be rendered. stats - An array of objects containing information about a
statistical item. It can have any number of elements. You can skip the
background color of the statistical item in the design, or create a function to
generate a random color.

## Friends list

We need to create a component FriendList with which we could display information
about the user's friends.

Description of the FriendList component The component must accept one prop
friends (an array of friend objects).

Description of the FriendListItem component The component must take several
props:

avatar - link to the avatar<br> name - friend's name <br> isOnline - boolean
indicating the status of a friend, online or offline.

## Transaction History

A component of the transaction history must be created in the personal profile
of the Internet Bank.

Description of the TransactionHistory component We need to create a component
TransactionHistory that accepts one prop items (an array of transaction objects
from transactions.json). The component creates a table layout. Each transaction
is a table row.
