
lazy val root = project
  .in(file("."))
  .settings(
    scalaVersion := "3.0.0",
   
    libraryDependencies += "com.lihaoyi" %% "pprint" % "0.6.6",

    libraryDependencies += "org.scalameta" %% "munit" % "0.7.26" % "test",
    Test / parallelExecution := false
  )
