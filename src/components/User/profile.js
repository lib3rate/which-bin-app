<section className={classes.mobile}>
  <h4 className={classes.profileTextButton}>Your Badges:</h4>
  {displayBadge1 && (
    <div>
      <img className={classes.badgeMobile} src="/images/badge.png" />
    </div>
  )}
  {!displayBadge1 && (
    <div>
      <img
        className={classes.badgeMobile}
        src="/images/placeholder-badge.png"
      />
    </div>
  )}
  {displayBadge2 && (
    <div>
      <img className={classes.badgeMobile} src="/images/badge.png" />
    </div>
  )}
  {displayBadge3 && (
    <div>
      <img className={classes.badgeMobile} src="/images/badge.png" />
    </div>
  )}
  <div className={classes.buttons}>
    <Button
      className={classes.button}
      variant="outlined"
      children={
        <Link to="/new" className={classes.link}>
          Add item
        </Link>
      }
    />
    <Button
      className={classes.button}
      variant="outlined"
      children={
        <Link to="/forest" className={classes.link}>
          Forest
        </Link>
      }
    />
  </div>
</section>





<section className={classes.mobile}>
          {/* <h4 className={classes.profileTextButton}>
            Here is your tree and your stats
          </h4> */}
          {displayBadge1 && (
            <div>
              <h4 className={classes.profileTextButton}>Your Badges:</h4>
              <img className={classes.badgeMobile} src="/images/badge.png" />
            </div>
          )}
          <div className={classes.buttons}>
            <Button
              className={classes.button}
              variant="outlined"
              children={
                <Link to="/new" className={classes.link}>
                  Add item
                </Link>
              }
            />
            <Button
              className={classes.button}
              variant="outlined"
              children={
                <Link to="/forest" className={classes.link}>
                  Forest
                </Link>
              }
            />
          </div>
        </section>