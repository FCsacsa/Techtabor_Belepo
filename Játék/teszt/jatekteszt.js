QUnit.module( "module a", function() {
  QUnit.test( "ujstart", function( assert ) {
    ujjatek();
    assert.equal( jatekos , "x", "x kezd" );
    assert.equal( allas.x ,0, "x 0" );
    assert.equal( allas.o , 0, "o 0" );
  });
  QUnit.test( "jelolo", function( assert ) {
    ujjatek();
    var eredm = jelolo(0,0,1);
    assert.equal( negyzetek[0][0] , 1, "elso negyzet" );
    assert.equal( eredm , 0, "0 marad" );
    assert.equal( allas.x ,0, "x 0" );
    assert.equal( allas.o , 0, "o 0" );
  });
  QUnit.test( "behuz", function( assert ) {
    ujjatek();
    var eredm = behuz(0,1);
    assert.equal( vonalak[0][1] , 1, "elso vonal" );
    assert.equal( jatekos , "o", "o kov" );
    assert.equal( eredm , true, "huzott" );
  });
  QUnit.test( "4jelolo", function( assert ) {
    ujjatek();
    var eredm = jelolo(0,0,1);
    assert.equal( negyzetek[0][0] , 1, "elso negyzet" );
    assert.equal( eredm , 0, "1 marad" );
    assert.equal( allas.x ,0, "x 0" );
    assert.equal( allas.o , 0, "o 0" );
    var eredm = jelolo(0,0,1);
    assert.equal( negyzetek[0][0] , 2, "masodik negyzet" );
    assert.equal( eredm , 0, "1 marad" );
    assert.equal( allas.x ,0, "x 0" );
    assert.equal( allas.o , 0, "o 0" );
    var eredm = jelolo(0,0,1);
    assert.equal( negyzetek[0][0] , 3, "harmadik negyzet" );
    assert.equal( eredm , 0, "1 marad" );
    assert.equal( allas.x ,0, "x 0" );
    assert.equal( allas.o , 0, "o 0" );
    var eredm = jelolo(0,0,1);
    assert.equal( negyzetek[0][0] , 4, "negyedik negyzet" );
    assert.equal( eredm , 1, "2 marad" );
    assert.equal( allas.x ,1, "x 1" );
    assert.equal( allas.o , 0, "o 0" );
  });
  QUnit.test( "4behuz", function( assert ) {
    ujjatek();
    var eredm = behuz(1, 2);
    assert.equal( vonalak[1][2] , 1, "elso vonal" );
    assert.equal( jatekos , "o", "o kov" );
    assert.equal( eredm , true, "huzott" );
    var eredm = behuz(1, 0);
    assert.equal( vonalak[1][0] , 1, "masodik vonal" );
    assert.equal( jatekos , "x", "x kov" );
    assert.equal( eredm , true, "huzott" );
    var eredm = behuz(2, 1);
    assert.equal( vonalak[2][1] , 1, "harmadik vonal" );
    assert.equal( jatekos , "o", "o kov" );
    assert.equal( eredm , true, "huzott" );
    var eredm = behuz(0, 1);
    assert.equal( vonalak[0][1] , 1, "negyedik vonal" );
    assert.equal( jatekos , "o", "o kov" );
    assert.equal( eredm , true, "huzott" );
  });
});
