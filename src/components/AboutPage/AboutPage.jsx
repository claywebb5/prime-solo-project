// ============================<ABOUT VIEW>============================
import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


function AboutPage() {

  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h4">
            What is A.A.?
          </Typography>
          <Typography variant="h6">
            Alcoholics Anonymous is a fellowship of people who come together to solve their drinking problem.  It doesn’t cost anything to attend A.A. meetings. There are no age or education requirements to participate. Membership is open to anyone who wants to do something about their drinking problem.
            A.A.’s primary purpose is to help alcoholics to achieve sobriety.
          </Typography>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h4">
            How A.A. Works
          </Typography>
          <Typography variant="h5">
            Members use the Twelve Steps to maintain sobriety. Groups use the Twelve Traditions to stay unified.
          </Typography>
          <Typography variant="h6">
            A.A.’s Twelve Steps are a set of spiritual principles. When practiced as a way of life, they can expel the obsession to drink and enable the sufferer to recover from alcoholism.
            The Twelve Traditions apply to A.A. as a whole. They outline how A.A. maintains its unity and relates itself to the world around it.
            The book Alcoholics Anonymous describes the A.A. program of recovery. It also contains stories written by the co-founders and stories from a wide range of members who have found recovery in A.A.
          </Typography>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h4">
            Who Are A.A. Members?
          </Typography>
          <Typography variant="h6">
            We are people who have discovered and admitted that we cannot control alcohol. We have learned that we must live without it to live normal, happy lives.
          </Typography>
          <Typography variant="h6">
            We are not anti-alcohol and we have no wish to reform the world. We are not allied with any group, cause or religious denomination. We welcome new members, but we do not recruit them.
          </Typography>
          <Typography variant="h6">
            We do not impose our experience with problem drinking on others, but we do share it when we are asked to do so. We know our own sobriety depends on connecting with other alcoholics.
          </Typography>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Related Information
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Select one of the following options for more information
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button size="small" color="primary">
            A.A. and Anonymity
          </Button>
          <Button size="small" color="secondary">
            History of A.A.
          </Button>
        </CardActions>
      </Card>

      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Helpful Links
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Select one of the following options for more information
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button size="small" color="primary">
            The Big Book
          </Button>
          <Button size="small" color="secondary">
            12 steps and 12 traditions
          </Button>
          <Button size="small" color="secondary">
            Contact
          </Button>
        </CardActions>
      </Card>


    </>
  );
}

export default AboutPage;
