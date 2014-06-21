part of testgl;

// this class lets a Camera fly through a TorusKnot like through a tunnel
class TorusKnotCamera extends Animatable
{
  Camera camera;
  
  TorusKnotCamera( this.camera);
  
  Vector3 p1 = new Vector3.zero();
  Vector3 p2 = new Vector3.zero();

  int p = 2;
  int q = 3;
  double radius=20.0;

  double time=0.0;
  Vector3 up = new Vector3.zero();
  
  void animate( double elapsed)
  {
    time += elapsed;
    getTorusKnotPos( time/1500, q, p, radius, 1.0, p1 );
    getTorusKnotPos( (time/1500)+0.1, q, p, radius, 1.0, p2 );
    
    up..setFrom(p2)..normalize();
    camera.setPosFromVec(p1);
    camera.lookAt(p2);
    
  }
  
}
