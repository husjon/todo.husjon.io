{ pkgs ? import <nixpkgs> { } }:

pkgs.mkShell rec {
  packages = with pkgs; [
    # your packages here (e.g: nodePackages_latest.pnpm)
    nodePackages_latest.pnpm
  ];

  shellHook = ''
    # export MY_VAR=123
  '';
}
