part of testgl;

// this class lets a Camera fly through a TorusKnot like through a tunnel
class TorusKnotCamera extends Animatable
{
  Camera camera;
  
  TorusKnotCamera( this.camera);
  
  Vector p1 = new Vector();
  Vector p2 = new Vector();

  int p = 2;
  int q = 3;
  double radius=20.0;

  double time=0.0;
  Vector up = new Vector();
  
  void animate( double elapsed)
  {
    time += elapsed;
    getTorusKnotPos( time/1500, q, p, radius, 1.0, p1 );
    getTorusKnotPos( (time/1500)+0.1, q, p, radius, 1.0, p2 );
    
    up..set(p2)..normalize();
    camera.setPosFromVec(p1);
    camera.lookAt(p2);
    
  }
  
}
