part of chronosgl;

// http://stackoverflow.com/questions/3235385/given-a-bounding-box-and-a-line-two-points-determine-if-the-line-intersects-t

// all args are Vec3, Hit will be filled by this algo
// returns the side where we hit the cube

Vector currentHit = new Vector();
double currentDist = 0.0;
int currentSide = 0;

// B1  = Box corner 1
// B2  = Box corner 2
// L1  = Pick line start point
// L2  = Pick line end point
// Hit = hit point
int checkLineBox( Vector B1, Vector B2, Vector L1, Vector L2, Vector Hit)
{
    if (L2[0] < B1[0] && L1[0] < B1[0]) return -1;
    if (L2[0] > B2[0] && L1[0] > B2[0]) return -2;
    if (L2[1] < B1[1] && L1[1] < B1[1]) return -3;
    if (L2[1] > B2[1] && L1[1] > B2[1]) return -4;
    if (L2[2] < B1[2] && L1[2] < B1[2]) return -5;
    if (L2[2] > B2[2] && L1[2] > B2[2]) return -6;

    // this is the special case when the line start is in the box.
    // I don't like that it's returning here without still calculating the intersection hit point
    // I wonder if I could remove it.
    if (L1[0] > B1[0] && L1[0] < B2[0] &&
        L1[1] > B1[1] && L1[1] < B2[1] &&
        L1[2] > B1[2] && L1[2] < B2[2])
    {
        Hit.set( L1 );
        print("this sucks");
        return 1;
    }

    currentDist = 100000.0;
    currentSide = 0;
    if (getIntersection(L1[0] - B1[0], L2[0] - B1[0], L1, L2, Hit) && inBox(Hit, B1, B2, 1))
    {
        double d = L1.dist( Hit);
        if( d < currentDist )
        {
            currentDist = d;
            currentSide = 1; // LEFT
            currentHit.set( Hit );
        }
    }
    if (getIntersection(L1[1] - B1[1], L2[1] - B1[1], L1, L2, Hit) && inBox(Hit, B1, B2, 2))
    {
        double d = L1.dist( Hit);
        if( d < currentDist )
        {
            currentDist = d;
            currentSide = 2;  // BOTTOM
            currentHit.set( Hit );
        }
    }
    if (getIntersection(L1[2] - B1[2], L2[2] - B1[2], L1, L2, Hit) && inBox(Hit, B1, B2, 3))
    {
        double d = L1.dist( Hit);
        if( d < currentDist )
        {
            currentDist = d;
            currentSide = 3;  // FRONT
            currentHit.set( Hit );
        }
    }
    if (getIntersection(L1[0] - B2[0], L2[0] - B2[0], L1, L2, Hit) && inBox(Hit, B1, B2, 1))
    {
        double d = L1.dist( Hit);
        if( d < currentDist )
        {
            currentDist = d;
            currentSide = 4;  // RIGHT
            currentHit.set( Hit );
        }
    }
    if (getIntersection(L1[1] - B2[1], L2[1] - B2[1], L1, L2, Hit) && inBox(Hit, B1, B2, 2))
    {
        double d = L1.dist( Hit);
        if( d < currentDist )
        {
            currentDist = d;
            currentSide = 5; // TOP
            currentHit.set( Hit );
        }
    }
    if (getIntersection(L1[2] - B2[2], L2[2] - B2[2], L1, L2, Hit) && inBox(Hit, B1, B2, 3))
    {
        double d = L1.dist( Hit);
        if( d < currentDist )
        {
            currentDist = d;
            currentSide = 6; // BACK
            currentHit.set( Hit );
        }
    }

    if( currentSide > 0)
    {
      Hit.set( currentHit );
    }
    return currentSide;
}

Vector temp = new Vector();
bool getIntersection( double fDst1, double fDst2, Vector P1, Vector P2, Vector Hit)
{
    if ((fDst1 * fDst2) >= 0) return false;
    if (fDst1 == fDst2) return false;

    temp.set( P2);
    temp.subtract( P1);
    temp.scale( (-fDst1 / (fDst2 - fDst1)));
    Hit.set( temp);
    Hit.add( P1);
    return true;
}

bool inBox( Vector Hit, Vector B1, Vector B2, int axis)
{
    if (axis == 1 && Hit[2] > B1[2] && Hit[2] < B2[2] && Hit[1] > B1[1] && Hit[1] < B2[1]) return true;
    if (axis == 2 && Hit[2] > B1[2] && Hit[2] < B2[2] && Hit[0] > B1[0] && Hit[0] < B2[0]) return true;
    if (axis == 3 && Hit[0] > B1[0] && Hit[0] < B2[0] && Hit[1] > B1[1] && Hit[1] < B2[1]) return true;
    return false;
}
